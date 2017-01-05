import moment from 'moment';

function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, {
                id: guid(),
                created_time: moment.utc().format(),
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
        default:
            return state;
    }
    return state;
}

//CLEANUP: fake guid
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

function comments(state = [], action) {
    if (typeof action.nomId !== 'undefined') {
        return {
            // take the current state
            ...state,
            // overwrite this post with a new one
            [action.nomId]: postComments(state[action.nomId], action)
        }
    }
    return state;
}

export default comments;
