import React from 'react';
import { Link } from 'react-router';
import HashtagSpan from '../../../components/HashtagSpan/HashtagSpan';
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

    render() {
        let {
            addHashtagToNote,
            note,
            removeHashtagsFromNote,
            hashtags
        } = this.props;

        return (
            <div className="note-header">
                <h2 className="text-truncate">{note.title}</h2>
                <div className="hashtags">
                    {note.track ? <Link to={"/t/" + note.track.id}><span className="tag track-tag"><small><FontAwesome name="list-ul" /></small> {note.track.name}</span></Link> : undefined}{note.hashtags ? note.hashtags.map((hashtag, i) => <HashtagSpan {...this.props} hashtag={hashtag} customClass="default" key={i} i={i} />) : undefined}
                </div>
            </div>
        )
    }
}

export default NoteHeader;
