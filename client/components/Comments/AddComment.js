import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Avatar from '../Reusable/Avatar';
import ErrorSpan from '../Reusable/ErrorSpan';

const AddComment = React.createClass({
    handleCommentSubmit(e) {
        e.preventDefault();
        let {
            nomId,
            userProfile,
            addComment,
            addCommentError
        } = this.props;

        var body = this.refs.body.value;

        if (body == '') {
            addCommentError('Write a comment yo!');
        } else {
            //post the comment
            addComment(nomId, userProfile, body);
            addCommentError('');
            this.refs.addCommentForm.reset();
        }
    },
    componentWillMount() {
        //ensure error message is null when loading the AddComment component
        let {
            ui,
            addCommentError
        } = this.props;

        if (ui.comments.addCommentError != '')
            addCommentError('');
    },
    render() {
        let {
            settings,
            userProfile,
            ui,
        } = this.props;

        const userProfileLink = "/u/" + userProfile.id;
        const username = "@" + userProfile.username;

        return (
            <form ref="addCommentForm" className="add-comment" onSubmit={this.handleCommentSubmit}>
                <Link to={userProfileLink}><Avatar user={userProfile} size="50" customClass="pull-left timeline" /></Link>
                <div className="ibox">
                    <textarea ref="body" placeholder={settings.comments.addCommentPlaceholder} />
                    <hr />
                    {ui.comments.addCommentError ? (<ErrorSpan error={ui.comments.addCommentError} />) : null}
                    <button type="submit" className="btn btn-sm btn-success pull-right"><FontAwesome name="paper-plane" /> Reply</button>
                    <div className="clearfix"></div>
                </div>
            </form>
        )
    }
})

export default AddComment;
