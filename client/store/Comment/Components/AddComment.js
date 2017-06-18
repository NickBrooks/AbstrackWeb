import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Avatar from '../../../components/Avatar/Avatar';
import ErrorSpan from '../../../components/ErrorSpan/ErrorSpan';

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    handleCommentSubmit(e) {
        e.preventDefault();
        let {
            noteId,
            account,
            addComment,
            addCommentError
        } = this.props;

        var body = this.refs.body.value;

        if (body == '') {
            addCommentError('Write a comment yo!');
        } else {
            //post the comment
            addComment(noteId, account, body);
            addCommentError('');
            this.refs.addCommentForm.reset();
        }
    }

    componentWillMount() {
        //ensure error message is null when loading the AddComment component
        let {
            ui,
            addCommentError
        } = this.props;

        if (ui.comments.addCommentError != '')
            addCommentError('');
    }

    render() {
        let {
            account,
            ui,
        } = this.props;

        const accountLink = "/u/" + account.id;
        const username = "@" + account.username;

        return (
            <form ref="addCommentForm" className="add-comment" onSubmit={this.handleCommentSubmit}>
                <Link to={accountLink}><Avatar user={account} size="50" customClass="pull-left timeline" /></Link>
                <div className="ibox">
                    <textarea ref="body" placeholder={ui.comments.addCommentPlaceholder} />
                    <hr />
                    {ui.comments.addCommentError ? (<ErrorSpan error={ui.comments.addCommentError} />) : null}
                    <button type="submit" className="btn btn-sm btn-success pull-right"><FontAwesome name="paper-plane" /> Reply</button>
                    <div className="clearfix"></div>
                </div>
            </form>
        )
    }
}

export default AddComment;
