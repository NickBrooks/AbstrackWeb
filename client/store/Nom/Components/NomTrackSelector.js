import React from 'react';
import { Typeahead } from 'react-typeahead';

class NomTrackSelector extends React.Component {
    constructor(props) {
        super(props);
    }

    renderTypeahead() {
        let { tracks } = this.props;

        function displayOption(option) {
            return option.name;
        };

        return (
            <Typeahead
                options={tracks}
                filterOption="name"
                displayOption={displayOption}
                placeholder="Track"
                className="editor-track"
                customClasses={{
                    input: "form-control"
                }}
                maxVisible={5}
            />
        )
    }

    render() {
        return (
            this.renderTypeahead()
        )
    }
}

export default NomTrackSelector;
