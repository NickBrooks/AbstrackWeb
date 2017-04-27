import React from 'react';
import { Link } from 'react-router';
import { extractImagesFromString } from '../../../functions';
import HashtagSpan from '../../HashtagSpan/HashtagSpan';
import Avatar from '../../Avatar/Avatar';

class NomNode extends React.Component {
    constructor(props) {
        super(props);
    }

    renderMediaPreviews() {
        var images = extractImagesFromString(this.props.data.body);

        if (images) {
            return (
                <ul className="media-preview my-1">
                    {images.map((image, i) =>
                        <li className="cropped-thumb mr-1" style={{backgroundImage: "url(" + image + ")"}}></li>)
                    }
                </ul>
            )
        }
    }

    render() {
        const nom = this.props.data;
        const link = "/n/" + nom.id;

        return (
            <Link to={link}>
                <li className="nom-node">
                    <div className="text-truncate">
                        <span className="title">{nom.title}</span> {nom.commentCount > 0 ? <span className="comment-count">{nom.commentCount}</span> : undefined} <span className="body">{nom.body}</span>
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
