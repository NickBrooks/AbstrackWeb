import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Avatar from '../Reusable/Avatar';

const AddComment = React.createClass({
  handleCommentSubmit(e) {
    e.preventDefault();
    let { nomId, userProfile } = this.props;
    var comment = this.refs.comment.value;

    //post the comment
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
          <span className="error">Snap! Write a message</span>
          <button type="submit" className="btn btn-success pull-right"><FontAwesome name="paper-plane" /> Reply</button>
          <div className="clearfix"></div>
        </div>
      </form>
    )
  }
})

export default AddComment;
