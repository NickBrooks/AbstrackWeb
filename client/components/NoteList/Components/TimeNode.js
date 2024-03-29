import React from 'react';
import NoteNode from './NoteNode';

class TimeNode extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="time-node">
                <h4>{this.props.title}</h4>
                <ul className="list-unstyled node-list">
                    {this.props.filteredNotes.map((note) => <NoteNode key={note.id} id={note.id} note={note} {...this.props} />)}
                </ul>
            </div>
        )
    }
}

export default TimeNode;
