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
      <form className="add-comment">
        <Link to={userProfileLink}><Avatar user={userProfile} size="50" customClass="pull-left timeline" /></Link>
        <div className="ibox">
          <textarea />
          <hr />
          <button type="submit" className="btn btn-success pull-right">Reply</button>
          <div className="clearfix"></div>
        </div>
      </form>
    )
  }
})

export default AddComment;
