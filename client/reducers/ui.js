function ui(state = [], action) {
    switch (action.type) {
        case 'TOGGLE_NEW_NOM_MODAL':
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
        default:
            return state;
    }
}

export default ui;
