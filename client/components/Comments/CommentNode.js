import React from 'react';
import ReactMarkdown from 'react-markdown';
import Avatar from '../Reusable/Avatar';

const CommentNode = React.createClass({
    render() {
        return (
          <li>
            <Avatar user={this.props.user} size="50" customClass="pull-left timeline" />
            <div className="ibox comment-body">
              <ReactMarkdown source={this.props.body} />
            </div>
          </li>
        )
    }
})

export default CommentNode;
