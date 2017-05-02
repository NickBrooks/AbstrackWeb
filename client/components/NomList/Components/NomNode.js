import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import removeMd from 'remove-markdown';
import { extractImagesFromString, extractYoutubeFromString } from '../../../functions';
import HashtagSpan from '../../HashtagSpan/HashtagSpan';
import Avatar from '../../Avatar/Avatar';
import NomNodeToolbar from './NomNodeToolbar';

class NomNode extends React.Component {
    constructor(props) {
        super(props);
    }

    renderMediaPreviews() {
        let { noms, id } = this.props;
        const i = noms.findIndex((nom) => nom.data.id === id);
        let { body } = noms[i].data;
        var images = extractImagesFromString(body);
        var youtube = extractYoutubeFromString(body);
        if (youtube != null) {
            images.push("https://img.youtube.com/vi/" + youtube[1] + "/0.jpg")
        }

        if (images) {
            return (
                <ul className="media-preview my-1">
                    {images.map((image, i) =>
                        <li className="cropped-thumb mr-1" style={{ backgroundImage: "url(" + image + ")" }} key={i}></li>
                    )}
                </ul>
            )
        }
    }

    render() {
        let { noms, id } = this.props;
        const i = noms.findIndex((nom) => nom.data.id === id);
        const nom = noms[i].data;
        const views = noms[i].views;
        const link = "/n/" + nom.id;
        const body = removeMd(nom.body);

        var isInbox = false;
        var isPinned = false;
        if (views.indexOf("inbox") >= 0)
            isInbox = true;
        if (views.indexOf("pinned") >= 0)
            isPinned = true;

        return (
            <Link to={link}>
                <li className={"nom-node" + (isPinned ? " pinned" : "")}>
                    <div className="quick-info text-truncate">
                        {isPinned ? <FontAwesome name="thumb-tack" /> : undefined} <span className="title">{nom.title}</span> {nom.commentCount > 0 ? <span className="comment-count">{nom.commentCount}</span> : undefined} <span className="body">{body}</span>
                        <NomNodeToolbar {...this.props} />
                    </div>
                    <div className="hashtags">
                        {nom.hashtags.map((hashtag, i) => <HashtagSpan {...this.props} hashtag={hashtag} disableLink={true} customClass="default" key={i} i={i} />)}
                    </div>
                    {this.renderMediaPreviews()}
                </li>
            </Link>
        )
    }
}

export default NomNode;
