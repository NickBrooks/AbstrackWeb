import React from 'react';
import CommentNode from './CommentNode';

const Comments = React.createClass({
    render() {
      const { nomId, comments } = this.props;
      const nomComments = comments[nomId];
      if (nomComments == null || nomComments.length == 0) {
        return null;
      }

      return (
        <ul className="comments">
          {nomComments.map((comment) => <CommentNode {...comment} key={comment.id} id={comment.id} />)}
        </ul>
      )
    }
})

export default Comments;
