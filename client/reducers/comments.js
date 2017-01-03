function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            // return the new state with the new comment
            return [...state, {
                user: action.author,
                text: action.comment
            }];
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
            [action.postId]: postComments(state[action.nomId], action)
        }
    }
    return state;
}

export default comments;
