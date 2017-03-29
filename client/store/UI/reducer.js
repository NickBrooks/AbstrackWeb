function ui(state = [], action) {
    switch (action.type) {
        case 'TOGGLE_NOM_EDITOR':
            return Object.assign({}, state, {
                newNomModal: {
                    open: action.value
                }
            });
        case 'ADD_COMMENT_ERROR':
            return Object.assign({}, state, {
                comments: {
                    addCommentError: action.error
                }
            });
        case 'TOGGLE_EDIT_COMMENT_MODE':
            return Object.assign({}, state, {
                comments: {
                    editComment: action.value
                }
            });
        case 'MSG_LOGIN_ERROR':
            return Object.assign({}, state, {
                login: {
                    msgLoginError: action.message
                }
            });
        default:
            return state;
    }
}

export default ui;
