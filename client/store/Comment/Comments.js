import React from 'react';
import CommentNode from './Components/CommentNode';
import AddComment from './Components/AddComment';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  renderComments(noteComments) {
    let {noteId, ui} = this.props;
    return (
      noteComments.map((comment) => <CommentNode {...comment} currentUser={this.props.account} key={comment.id} noteId={noteId} commentId={comment.id} {...this.props} />)
    )
  }

  render() {
    const { noteId, comments } = this.props;
    const noteComments = comments[noteId];

    return (
      <div className="comments">
        <ul>
          {noteComments == null || noteComments.length == 0 ? null : this.renderComments(noteComments)}
        </ul>
        <AddComment noteId={noteId} {...this.props} />
      </div>
    )
  }
}

export default Comments;
