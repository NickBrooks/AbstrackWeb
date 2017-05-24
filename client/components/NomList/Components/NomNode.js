import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import removeMd from 'remove-markdown';
import { extractNom, extractTrack, extractImagesFromString, extractYoutubeFromString } from '../../../functions';
import HashtagSpan from '../../HashtagSpan/HashtagSpan';
import Avatar from '../../Avatar/Avatar';
import NomNodeToolbar from './NomNodeToolbar';

class NomNode extends React.Component {
    constructor(props) {
        super(props);

        const nom = extractNom(props.noms, props.id);
        const body = removeMd(nom.data.body);
        const isInbox = (nom.views.indexOf("inbox") >= 0 ? true : false);
        const isPinned = (nom.views.indexOf("pinned") >= 0 ? true : false);
        const link = this.generateLink(nom);
        const views = nom.views;
        const track = (nom.data.track ? extractTrack(props.tracks, nom.data.track.id) : null)

        this.state = {
            body,
            isInbox,
            isPinned,
            link,
            nom: nom.data,
            track,
            views,
        }
    }

    generateLink(nom) {        
        if (nom.views.findIndex((view) => view == "drafts") >= 0) {
            return "/new/nom/" + nom.id;
        }

        return "/n/" + nom.id;
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
            nom,
            track,
            views
        } = this.state;

        return (
            <Link to={link}>
                <li className={"nom-node" + (isPinned ? " pinned" : "")}>
                    <div className="quick-info text-truncate">
                        {isPinned ? <FontAwesome name="thumb-tack" /> : undefined} <span className="title">{nom.title}</span> {nom.commentCount > 0 ? <span className="comment-count">{nom.commentCount}</span> : undefined} <span className="body">{body}</span>
                        <NomNodeToolbar {...this.props} />
                    </div>
                    <div className="hashtags">
                        {track ? <span className="tag tracktag"><small><FontAwesome name="list-ul" /></small> {track.name}</span> : undefined}{nom.hashtags ? nom.hashtags.map((hashtag, i) => <HashtagSpan {...this.props} hashtag={hashtag} disableLink={true} customClass="default" key={i} i={i} />) : undefined}
                    </div>
                    {this.renderMediaPreviews()}
                </li>
            </Link>
        )
    }
}

export default NomNode;
