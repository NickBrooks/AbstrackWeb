import React from 'react';
import { Typeahead } from 'react-typeahead';
import FontAwesome from 'react-fontawesome';
import { delay, } from '../../../functions';

class NoteTrackSelector extends React.Component {
    constructor(props) {
        super(props);
        this.selectTrack = this.selectTrack.bind(this);
    }

    saveDraft() {
        let { noteEditor, handleAddDraft, handleSaveDraft, params } = this.props;

        // do the save only if there's already a body and title 
        if (noteEditor.body != null || noteEditor.title != null) {
            (params.draftId ? handleSaveDraft(params.draftId, noteEditor) : handleAddDraft(noteEditor));
        }
    }

    clearTrack() {
        this.props.setDraftTrack(null);
        delay(500).then(() => {
            this.saveDraft();
        })
    }

    selectTrack(track) {
        this.props.setDraftTrack(track.id);
        delay(500).then(() => {
            this.saveDraft();
        })
    }

    renderTypeahead() {
        let { tracks } = this.props;

        return (
            <Typeahead ref="noteTrackSelector"
                options={tracks}
                filterOption="name"
                displayOption="name"
                placeholder="Track"
                onOptionSelected={this.selectTrack}
                customClasses={{
                    input: "form-control"
                }}
                maxVisible={5}
                tabIndex={2}
            />
        )
    }

    renderSelectedTrack() {
        let { noteEditor, tracks } = this.props;
        const i = tracks.findIndex((track) => track.id === noteEditor.track.id);
        const track = tracks[i];

        return (
            <div className="selected-track text-truncate pull-right">
                <span className="selected-tag bg-note-green-light"><button className="btn btn-link" onClick={() => this.clearTrack()}><FontAwesome name="close" /> </button> {track.name}</span>
            </div>
        )
    }

    render() {
        let { noteEditor, tracks } = this.props;

        return (
            <div className="editor-track">
                {(noteEditor == null || noteEditor.track == null || noteEditor.track.id == null) ? this.renderTypeahead() : this.renderSelectedTrack(noteEditor)}
            </div>
        )
    }
}

export default NoteTrackSelector;
