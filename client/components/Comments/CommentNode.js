import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import ReactMarkdown from 'react-markdown';
import Avatar from '../Reusable/Avatar';

const CommentNode = React.createClass({
  handleCommentSave(e) {
    e.preventDefault();
    let {
      nomId,
      commentId,
      updateComment,
      toggleEditCommentMode
    } = this.props;

    var updatedBody = this.refs.updatedBody.value;

    if (updatedBody == '') {
      toggleEditCommentMode('');
    } else {
      //post the comment
      updateComment(nomId, commentId, updatedBody);
      toggleEditCommentMode('');
    }
  },
  handleCommentDelete(e) {
    e.preventDefault();
    let {
      nomId,
      commentId,
      deleteComment
    } = this.props;

    deleteComment(nomId, commentId);
  },
  renderActionButtons() {
    let {commentId, toggleEditCommentMode} = this.props;

    return (
      <div className="btn-group pull-right" role="group" aria-label="Basic example">
        <button className="btn btn-toolbar btn-sm" onClick={() => toggleEditCommentMode(commentId)}><FontAwesome name="pencil" /></button>
        <button className="btn btn-toolbar btn-sm" onClick={this.handleCommentDelete}><FontAwesome name="close" /></button>
      </div>
    );
  },
  renderReadOnlyMode(body) {
    return (
      <ReactMarkdown source={body} />
    );
  },
  renderEditMode(body) {
    return (
      <form ref="editCommentForm" className="edit-comment" onSubmit={this.handleCommentSave}>
        <textarea ref="updatedBody" defaultValue={body} />
        <hr />
        <button type="submit" className="btn btn-sm btn-success pull-right"><FontAwesome name="save" /> Save</button>
        <div className="clearfix"></div>
      </form>
    );
  },
  render() {
    let {commentId, user, body, currentUser, ui} = this.props;
    let userProfileLink = "/u/" + user.id;
    let username = "@" + user.username;

    return (
      <li>
        <Link to={userProfileLink}><Avatar user={user} size="50" customClass="pull-left timeline" /></Link>
        <div className="ibox comment-body">
          <div className="row">
            <div className="col-xs-10">
              <Link to={userProfileLink}><h6 className="user">{user.display_name} <span className="username">{username}</span></h6></Link>
            </div>
            <div className="col-xs-2">
              {user.id === currentUser.id ? this.renderActionButtons() : null}
            </div>
          </div>
          <hr />
          {ui.comments.editComment === commentId ? this.renderEditMode(body) : this.renderReadOnlyMode(body)}
        </div>
      </li>
    )
  }
})

export default CommentNode;
