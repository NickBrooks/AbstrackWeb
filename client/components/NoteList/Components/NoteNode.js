import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import removeMd from 'remove-markdown';
import { extractNote, extractTrack, extractImagesFromString, extractYoutubeFromString } from '../../../functions';
import HashtagSpan from '../../HashtagSpan/HashtagSpan';
import Avatar from '../../Avatar/Avatar';
import NoteNodeToolbar from './NoteNodeToolbar';

class NoteNode extends React.Component {
    constructor(props) {
        super(props);

        const note = extractNote(props.notes, props.id);
        const body = (note.data.body ? note.data.body : "");
        const isInbox = (note.views.indexOf("inbox") >= 0 ? true : false);
        const isPinned = (note.views.indexOf("pinned") >= 0 ? true : false);
        const link = this.generateLink(note);
        const views = note.views;
        const track = (note.data.track ? extractTrack(props.tracks, note.data.track.id) : null)

        this.state = {
            body,
            isInbox,
            isPinned,
            link,
            note: note.data,
            track,
            views,
        }
    }

    generateLink(note) {
        if (note.views.findIndex((view) => view == "drafts") >= 0) {
            return "/new/note/" + note.id;
        }

        return "/n/" + note.id;
    }

    renderMediaPreviews() {
        let { body } = this.state;

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
        let {
            body,
            isPinned,
            isInbox,
            link,
            note,
            track,
            views
        } = this.state;

        return (
            <Link to={link}>
                <li className={"note-node" + (isPinned ? " pinned" : "")}>
                    <div className="quick-info text-truncate">
                        {isPinned ? <FontAwesome name="thumb-tack" /> : undefined} <span className="title">{note.title}</span> {note.commentCount > 0 ? <span className="comment-count">{note.commentCount}</span> : undefined} <span className="body">{removeMd(body)}</span>
                        <NoteNodeToolbar {...this.props} />
                    </div>
                    <div className="hashtags">
                        {track ? <span className="tag tracktag"><small><FontAwesome name="list-ul" /></small> {track.name}</span> : undefined}{note.hashtags ? note.hashtags.map((hashtag, i) => <HashtagSpan {...this.props} hashtag={hashtag} disableLink={true} customClass="default" key={i} i={i} />) : undefined}
                    </div>
                    {this.renderMediaPreviews()}
                </li>
            </Link>
        )
    }
}

export default NoteNode;
