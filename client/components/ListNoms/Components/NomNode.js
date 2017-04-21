import React from 'react';
import { Link } from 'react-router';
import HashtagSpan from '../../HashtagSpan/HashtagSpan';
import Avatar from '../../Avatar/Avatar';

class NomNode extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const nom = this.props;
        const link = "/n/" + nom.id;

        return (
            <Link to={link}>
                <li>
                    <Avatar user={nom.createdBy} size="25" /> <span className="title">{nom.title}</span> <span className="comment-count">({nom.commentCount})</span> {nom.hashtags.map((hashtag, i) =>
                        <HashtagSpan {...this.props} hashtag={hashtag} disableLink={true} customClass="default" key={i} i={i} />)}
                </li>
            </Link>
        )
    }
}

export default NomNode;
