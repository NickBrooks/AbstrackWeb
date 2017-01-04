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
                addComment: {
                    error: action.error
                }
            });
        default:
            return state;
    }
}

export default ui;
