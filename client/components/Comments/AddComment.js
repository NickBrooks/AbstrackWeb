import React from 'react';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';
import Avatar from '../Reusable/Avatar';

const AddComment = React.createClass({
  handleCommentSubmit(e) {
    e.preventDefault();
    const { nomId, userProfile } = this.props;
    const comment = this.refs.comment.value;

    this.props.addComment(nomId, userProfile, comment);
    this.refs.commentForm.reset();
  },
  render() {
    const {userProfile} = this.props;
    const userProfileLink = "/u/" + userProfile.id;
    const username = "@" + userProfile.username;
    return (
      <form ref="commentForm" className="add-comment" onSubmit={this.handleCommentSubmit}>
        <Link to={userProfileLink}><Avatar user={userProfile} size="50" customClass="pull-left timeline" /></Link>
        <div className="ibox">
          <textarea ref="comment" />
          <hr />
          <button type="submit" className="btn btn-success pull-right">Reply</button>
          <div className="clearfix"></div>
        </div>
      </form>
    )
  }
})

export default AddComment;
