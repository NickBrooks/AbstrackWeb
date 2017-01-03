import React from 'react';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';
import Avatar from '../Reusable/Avatar';

const CommentNode = React.createClass({
    render() {
      const {user, body} = this.props;
      const userProfileLink = "/u/" + user.id;
      const username = "@" + user.username;
        return (
          <li>
            <Link to={userProfileLink}><Avatar user={user} size="50" customClass="pull-left timeline" /></Link>
            <div className="ibox comment-body">
              <Link to={userProfileLink}><h6 className="user">{user.display_name} <span className="username">{username}</span></h6></Link>
              <hr />
              <ReactMarkdown source={body} />
            </div>
          </li>
        )
    }
})

export default CommentNode;
