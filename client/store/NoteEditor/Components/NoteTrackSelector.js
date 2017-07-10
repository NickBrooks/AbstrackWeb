import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import FontAwesome from 'react-fontawesome';
import { delay, } from '../../../functions';

class NoteTrackSelector extends React.Component {
    constructor(props) {
        super(props);
        this.selectTrack = this.selectTrack.bind(this);
    }

    saveDraft() {
        let { noteEditor, handleAddDraft, handleSaveDraft, params, ui } = this.props;

        // do the save only if there's already a body and title 
        if (noteEditor.body != null || noteEditor.title != null && !ui.draft.savingStatus) {
            (params.draftId ? handleSaveDraft(params.draftId, noteEditor) : handleAddDraft(noteEditor));
        }
    }

    clearTrack() {
        this.props.setDraftTrack(null);
        delay(500).then(() => {
            this.saveDraft();
        })
    }

    selectTrack(selected) {
        this.props.setDraftTrack(selected[0].data.id);
        delay(500).then(() => {
            this.saveDraft();
        })
    }

    renderTypeahead() {
        let { tracks } = this.props;

        return (
            <Typeahead
                className="form-control editor-track mousetrap"
                ref={ref => this._trackTypeahead = ref}
                filterby={"data.name"}
                labelKey={option => option.data.name}
                onChange={selected => this.selectTrack(selected)}
                maxResults={5}
                options={tracks}
                placeholder="Track"
                emptyLabel=""
            />
        )
    }

    renderSelectedTrack() {
        let { noteEditor, tracks } = this.props;
        const i = tracks.findIndex((track) => track.id === noteEditor.track.id);
        const track = tracks[i];

        return (
            <div className="selected-track text-truncate pull-right">
                <span className="selected-tag bg-note-green-light"><button className="btn btn-link" onClick={() => this.clearTrack()}><FontAwesome name="close" /> </button> {track.data.name}</span>
            </div>
        )
    }

    render() {
        let { noteEditor, tracks } = this.props;

        return (
            <div className="editor-track">
                {(noteEditor == null || noteEditor.track == null || noteEditor.track.id == null) ? this.renderTypeahead() : this.renderSelectedTrack()}
            </div>
        )
    }
}

export default NoteTrackSelector;
