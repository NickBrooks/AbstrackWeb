import moment from 'moment';
import { guid } from '../../functions';

function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, {
                id: guid(),
                createdTime: moment.utc().format(),
                user: action.user,
                body: action.body
            }];
        case 'UPDATE_COMMENT':
            return state.map(comment => comment.id === action.commentId ?
                // update the comment with a matching id
                { ...comment, body: action.updatedBody } :
                // otherwise return original comment
                comment
            );
        case 'DELETE_COMMENT':
            //only return if id is not noteId
            function dontDelete(commentId, commentIdCompare) {
                return commentId !== commentIdCompare.id;
            }

            return state.filter(dontDelete.bind(null, action.commentId));
        default:
            return state;
    }
}

function comments(state = [], action) {
    if (typeof action.noteId !== 'undefined') {
        return {
            // take the current state
            ...state,
            // overwrite this post with a new one
            [action.noteId]: postComments(state[action.noteId], action)
        }
    }
    return state;
}

export default comments;
