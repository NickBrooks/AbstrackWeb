import React from 'react';
import RenderMarkdown from '../../../components/RenderMarkdown/RenderMarkdown';

class NoteDescription extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="note-body">
                <RenderMarkdown markdown={this.props.body} />
            </div>
        )
    }
}

export default NoteDescription;
