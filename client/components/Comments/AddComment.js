import React from 'react';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';
import Avatar from '../Reusable/Avatar';

const AddComment = React.createClass({
    render() {
        const {userProfile, nomId} = this.props;
        const userProfileLink = "/u/" + userProfile.id;
        const username = "@" + userProfile.username;
        return (
          <div className="add-comment">
            <Link to={userProfileLink}><Avatar user={userProfile} size="50" customClass="pull-left timeline" /></Link>
            <div className="ibox comment-body">
              <Link to={userProfileLink}><h6 className="user">{userProfile.display_name} <span className="username">{username}</span></h6></Link>
              <hr />
            </div>
          </div>
        )
    }
})

export default AddComment;
