import React from 'react';
import { Link } from 'react-router';
import HashtagSpan from '../../HashtagSpan/HashtagSpan';
import Avatar from '../../Avatar/Avatar';

class NomNode extends React.Component {
    constructor(props) {
        super(props);
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
                    <div className="hashtags">{nom.hashtags.map((hashtag, i) =>
                        <HashtagSpan {...this.props} hashtag={hashtag} disableLink={true} customClass="default" key={i} i={i} />)}
                    </div>
                </li>
            </Link>
        )
    }
}

export default NomNode;
