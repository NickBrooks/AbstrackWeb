import React from 'react';
import { Link } from 'react-router';
import Avatar from '../Reusable/Avatar';

const NomNode = React.createClass({
    render() {
        const nom = this.props;
        const link = "/n/" + nom.id;

        return (
            <Link to={link}>
                <li>
                    <Avatar user={nom.created_by} size="25" /> <span className="title">{nom.title}</span> <span className="comment-count">({nom.commentCount})</span>
                </li>
            </Link>
        )
    }
})

export default NomNode;
