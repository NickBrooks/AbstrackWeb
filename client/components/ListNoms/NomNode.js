import React from 'react';
import HashtagSpan from '../Reusable/HashtagSpan';
import { Link } from 'react-router';
import Avatar from '../Reusable/Avatar';

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
                    <Avatar user={nom.created_by} size="25" /> <span className="title">{nom.title}</span> <span className="comment-count">({nom.commentCount}) {nom.hashtags.map((hashtag, i) => <HashtagSpan {...this.props} hashtag={hashtag} disableLink={true} customClass="default" key={i} i={i} />)}</span>
                </li>
            </Link>
        )
    }
}

export default NomNode;
