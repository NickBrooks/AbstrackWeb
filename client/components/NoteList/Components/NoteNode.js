import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import removeMd from 'remove-markdown';
import moment from 'moment';
import { extractNote, extractTrack, extractImagesFromString, extractYoutubeFromString } from '../../../functions';
import HashtagSpan from '../../HashtagSpan/HashtagSpan';
import Avatar from '../../Avatar/Avatar';
import NoteNodeToolbar from './NoteNodeToolbar';

class NoteNode extends React.Component {
    constructor(props) {
        super(props);

        var isDraft = props.note.views.findIndex((view) => view == "drafts");

        this.state = {
            noteType: isDraft >= 0 ? "draft" : "note"
        }
    }

    generateLink() {
        let { noteType } = this.state;

        switch (noteType) {
            case 'draft':
                return "/new/note/" + this.props.id;
            case 'note':
                return "/n/" + this.props.id;
        }
    }

    renderMediaPreviews() {
        var note = extractNote(this.props.notes, this.props.id);
        var body = (note.data.body ? note.data.body : "");

        var media = [];

        var images = extractImagesFromString(body);
        if (images != null) {
            media = images;
        }

        var youtube = extractYoutubeFromString(body);
        if (youtube != null) {
            media.push("https://img.youtube.com/vi/" + youtube[1] + "/0.jpg")
        }

        if (media.length > 0) {
            return (
                <ul className="list-unstyled media-preview mt-1">
                    {media.map((image, i) =>
                        <li className="cropped-thumb mr-1" style={{ backgroundImage: "url(" + image + ")" }} key={i}></li>
                    )}
                </ul>
            )
        }
    }

    render() {
        let { note } = this.props;
        var body = (note.data.body ? note.data.body : "");
        var isInbox = (note.views.indexOf("inbox") >= 0 ? true : false);
        var isPinned = (note.views.indexOf("pinned") >= 0 ? true : false);
        var link = this.generateLink();
        var views = note.views;
        var track = (note.data.track ? extractTrack(this.props.tracks, note.data.track.id) : null)

        // the date
        var offset = moment().utcOffset();
        var noteTime = moment(note.data.updatedTime).format('llll');

        return (
            <Link to={link}>
                <li className={"note-node" + (isPinned ? " pinned" : "")}>
                    <div className="quick-info text-truncate">
                        {isPinned ? <FontAwesome name="thumb-tack" className="note-orange" /> : undefined} <span className="title">{note.data.title}</span> {note.commentCount > 0 ? <span className="comment-count">{note.commentCount}</span> : undefined} <span className="body">{removeMd(body)}</span>
                        <NoteNodeToolbar note={note} type={this.state.noteType} {...this.props} />
                    </div>
                    <div className="hashtags">
                        {track ? <span className="tag track-tag"><small><FontAwesome name="list-ul" /></small> {track.data.name}</span> : undefined}{note.data.hashtags ? note.data.hashtags.map((hashtag, i) => <HashtagSpan {...this.props} hashtag={hashtag} disableLink={true} customClass="default" key={i} i={i} />) : undefined}
                    </div>
                    {this.renderMediaPreviews()}
                    {noteTime}
                </li>
            </Link>
        )
    }
}

export default NoteNode;
