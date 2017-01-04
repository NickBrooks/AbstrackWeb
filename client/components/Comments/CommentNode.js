import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import ReactMarkdown from 'react-markdown';
import Avatar from '../Reusable/Avatar';

const CommentNode = React.createClass({
  toggleEdit(body) {
    console.log(body);
  },
  renderReadOnlyMode(body) {
    return (
      <ReactMarkdown source={body} />
    );
  },
  renderEditMode(body) {
    return (
      <div className="edit-comment">
        <textarea value={body} />
        <hr />
        <button type="submit" className="btn btn-sm btn-success pull-right"><FontAwesome name="save" /> Save</button>
        <div className="clearfix"></div>
      </div>
    );
  },
  render() {
    let {id, user, body, currentUser, editMode} = this.props;
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
              {user.id === currentUser.id ? (<button className="btn btn-secondary btn-sm pull-right" onClick={this.toggleEdit(body)}><FontAwesome name="edit" /></button>) : null}
            </div>
          </div>
          <hr />
          {editMode === id ? this.renderEditMode(body) : this.renderReadOnlyMode(body)}
        </div>
      </li>
    )
  }
})

export default CommentNode;
