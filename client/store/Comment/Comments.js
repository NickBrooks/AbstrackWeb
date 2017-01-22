import React from 'react';
import CommentNode from './Components/Comment';
import AddComment from './Components/AddComment';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  renderComments(nomComments) {
    let {nomId, ui} = this.props;
    return (
      nomComments.map((comment) => <Comment {...comment} currentUser={this.props.userProfile} key={comment.id} nomId={nomId} commentId={comment.id} {...this.props} />)
    )
  }

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
}

export default Comments;
