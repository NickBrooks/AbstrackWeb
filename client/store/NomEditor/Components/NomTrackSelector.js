import React from 'react';
import { Typeahead } from 'react-typeahead';
import FontAwesome from 'react-fontawesome';
import { delay, } from '../../../functions';

class NomTrackSelector extends React.Component {
    constructor(props) {
        super(props);
        this.selectTrack = this.selectTrack.bind(this);
    }

    saveDraft() {
        let { nomEditor, handleAddDraft, handleSaveDraft } = this.props;
        (nomEditor.id ? handleSaveDraft(nomEditor) : handleAddDraft(nomEditor));
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
            <Typeahead ref="nomTrackSelector"
                options={tracks}
                filterOption="name"
                displayOption="name"
                placeholder="Track"
                onOptionSelected={this.selectTrack}
                customClasses={{
                    input: "form-control"
                }}
                maxVisible={5}
            />
        )
    }

    renderSelectedTrack() {
        let { nomEditor, tracks } = this.props;
        const i = tracks.findIndex((track) => track.id === nomEditor.track.id);
        const track = tracks[i];

        return (
            <div className="selected-track text-truncate pull-right">
                <span className="selected-tag bg-nom-green-light"><button className="btn btn-link" onClick={() => this.clearTrack()}><FontAwesome name="close" /> </button> {track.name}</span>
            </div>
        )
    }

    render() {
        let { nomEditor, tracks } = this.props;

        return (
            <div className="editor-track">
                {(nomEditor.track == null || nomEditor.track.id == null) ? this.renderTypeahead() : this.renderSelectedTrack(nomEditor)}
            </div>
        )
    }
}

export default NomTrackSelector;
