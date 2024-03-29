import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Avatar from '../../../components/Avatar/Avatar';
import RenderMarkdown from '../../../components/RenderMarkdown/RenderMarkdown';

class CommentNode extends React.Component {
  constructor(props) {
    super(props);
    this.handleCommentSave = this.handleCommentSave.bind(this);
    this.handleCommentDelete = this.handleCommentDelete.bind(this);
  }

  handleCommentSave(e) {
    e.preventDefault();
    let {
      noteId,
      commentId,
      updateComment,
      toggleEditCommentMode
    } = this.props;

    var updatedBody = this.refs.updatedBody.value;

    if (updatedBody == '') {
      toggleEditCommentMode('');
    } else {
      //post the comment
      updateComment(noteId, commentId, updatedBody);
      toggleEditCommentMode('');
    }
  }

  handleCommentDelete(e) {
    e.preventDefault();
    let {
      noteId,
      commentId,
      deleteComment
    } = this.props;

    deleteComment(noteId, commentId);
  }

  renderActionButtons() {
    let {commentId, toggleEditCommentMode} = this.props;

    return (
      <div className="btn-group pull-right" role="group" aria-label="Basic example">
        <button className="btn btn-transparent btn-sm" onClick={() => toggleEditCommentMode(commentId)}><FontAwesome name="pencil" /></button>
        <button className="btn btn-transparent btn-sm" onClick={this.handleCommentDelete}><FontAwesome name="close" /></button>
      </div>
    );
  }

  renderReadOnlyMode(body) {
    return (
      <RenderMarkdown markdown={body} />
    );
  }

  renderEditMode(body) {
    return (
      <form ref="editCommentForm" className="edit-comment" onSubmit={this.handleCommentSave}>
        <textarea ref="updatedBody" defaultValue={body} />
        <hr />
        <button type="submit" className="btn btn-sm btn-success pull-right"><FontAwesome name="save" /> Save</button>
        <div className="clearfix"></div>
      </form>
    );
  }

  render() {
    let {commentId, user, body, currentUser, ui} = this.props;
    let accountLink = "/u/" + user.id;
    let username = "@" + user.username;

    return (
      <li>
        <Link to={accountLink}><Avatar user={user} size="50" customClass="pull-left timeline" /></Link>
        <div className="ibox comment-body">
          <div className="row">
            <div className="col-xs-10">
              <Link to={accountLink}><h6 className="user">{user.display_name} <span className="username">{username}</span></h6></Link>
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
}

export default CommentNode;
