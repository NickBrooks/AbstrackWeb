import React from 'react';
import CommentNode from './CommentNode';

//dummydata//dummy data
import CommentData from '../../dummydata/Comments';

const Comments = React.createClass({
    render() {
      const { nomId } = this.props;
      const comments = CommentData[nomId];
      if (comments == null || comments.length == 0) {
        return null;
      }

      return (
        <ul className="comments">
          {comments.map((comment) => <CommentNode {...comment} key={comment.id} id={comment.id} />)}
        </ul>
      )
    }
})

export default Comments;
