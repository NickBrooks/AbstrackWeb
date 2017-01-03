import React from 'react';
import CommentNode from './CommentNode';
import AddComment from './AddComment';

const Comments = React.createClass({
    renderComments(nomComments) {
      return (
          nomComments.map((comment) => <CommentNode {...comment} key={comment.id} id={comment.id} />)
        )
    },
    render() {
      const { nomId, comments } = this.props;
      const nomComments = comments[nomId];

      return (
        <div className="comments">
          <ul>
            {nomComments == null || nomComments.length == 0 ? null : this.renderComments(nomComments)}
          </ul>
          <AddComment nomId={nomId} {...this.props} />
        </div>
      )
    }
})

export default Comments;
