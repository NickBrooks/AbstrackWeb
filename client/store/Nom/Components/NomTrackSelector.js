import React from 'react';
import { Typeahead } from 'react-typeahead';
import FontAwesome from 'react-fontawesome';

class NomTrackSelector extends React.Component {
    constructor(props) {
        super(props);
        this.selectTrack = this.selectTrack.bind(this);

        this.state = {
            selectedTrack: null
        }
    }

    selectTrack(selectedTrack) {
        this.setState({ selectedTrack });
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

    renderSelectedTrack(selectedTrack) {
        return (
            <div className="selected-track text-truncate">
                <span className="selected-tag bg-nom-green-light"><button className="btn btn-link" onClick={() => this.setState({ selectedTrack: null })}><FontAwesome name="close" /> </button> {selectedTrack.name}</span>
            </div>
        )
    }

    render() {
        let { selectedTrack } = this.state;

        return (
            <div className="editor-track">
                {selectedTrack ? this.renderSelectedTrack(selectedTrack) : this.renderTypeahead()}
            </div>
        )
    }
}

export default NomTrackSelector;
