import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import removeMd from 'remove-markdown';
import { extractImagesFromString, extractYoutubeFromString } from '../../../functions';
import HashtagSpan from '../../HashtagSpan/HashtagSpan';
import Avatar from '../../Avatar/Avatar';

class NomNode extends React.Component {
    constructor(props) {
        super(props);
    }

    renderToolbar() {
        return (
            <div className="btn-group toolbar" role="group" aria-label="First group">
                <button type="button" className="btn btn-sm btn-secondary"><FontAwesome name="thumb-tack" /></button>
                <button type="button" className="btn btn-sm btn-secondary"><FontAwesome name="check" /></button>
                <button type="button" className="btn btn-sm btn-secondary"><FontAwesome name="caret-down" /></button>
            </div>
        )
    }

    renderMediaPreviews() {
        let { body } = this.props.data;
        var images = extractImagesFromString(body);
        var youtube = extractYoutubeFromString(body);
        if (youtube != null) {
            images.push("https://img.youtube.com/vi/" + youtube[1] + "/0.jpg")
        }

        if (images) {
            return (
                <ul className="media-preview my-1">
                    {images.map((image, i) =>
                        <li className="cropped-thumb mr-1" style={{ backgroundImage: "url(" + image + ")" }}></li>
                    )}
                </ul>
            )
        }
    }

    render() {
        const nom = this.props.data;
        const link = "/n/" + nom.id;
        const body = removeMd(nom.body);

        return (
            <Link to={link}>
                <li className="nom-node">
                    <div className="quick-info text-truncate">
                        <span className="title">{nom.title}</span> {nom.commentCount > 0 ? <span className="comment-count">{nom.commentCount}</span> : undefined} <span className="body">{body}</span>
                        {this.renderToolbar()}
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
