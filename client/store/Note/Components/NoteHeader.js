import React from 'react';
import { Link } from 'react-router';
import HashtagEditor from './HashtagEditor';
import FontAwesome from 'react-fontawesome';

class NoteHeader extends React.Component {
    constructor(props) {
        super(props);
        this.handlePinNote = this.handlePinNote.bind(this);
    }

    handlePinNote(value, e) {
        e.preventDefault();
        let { note, handlePinNote } = this.props;

        //pin it!
        handlePinNote(note.id, value);
    }

    renderPinned() {
        let { note } = this.props;

        if (note.pinned == true) {
            return (
                <Link to="#" onClick={this.handlePinNote.bind(this, false)}>
                    <span className="light pinned"><FontAwesome name="thumb-tack" /></span>
                </Link>
            )
        } else {
            return (
                <Link to="#" onClick={this.handlePinNote.bind(this, true)}>
                    <span className="light"><FontAwesome name="thumb-tack" rotate={270} /></span>
                </Link>
            )
        }
    }

    render() {
        let {
            addHashtagToNote,
            note,
            removeHashtagsFromNote,
            hashtags
        } = this.props;

        return (
            <div className="note-header">
                <h3>{this.props.note.title} {this.renderPinned()}</h3>
                <div className="hashtags">
                    <HashtagEditor hashtags={note.hashtags} hashtagList={hashtags} noteId={note.id} addHashtagToNote={addHashtagToNote} removeHashtagsFromNote={removeHashtagsFromNote} />
                </div>
            </div>
        )
    }
}

export default NoteHeader;
