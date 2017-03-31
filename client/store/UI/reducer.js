function ui(state = [], action) {
    switch (action.type) {
        case 'TOGGLE_NOM_EDITOR':
            return Object.assign({}, state, {
                newNomModal: {
                    open: action.value
                }
            });
        case 'TOGGLE_NEW_NOM_BUTTON':
            return Object.assign({}, state, {
                newNomButton: {
                    show: action.value
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
        case 'LOGIN_ERROR_MESSAGE':
            return Object.assign({}, state, {
                login: {
                    errorMsg: action.message
                }
            });
        case 'UPDATE_PASSWORD_ERROR_MSG':
            return Object.assign({}, state, {
                account: {
                    password: {
                        errorMsg: action.message
                    } 
                }
            });
            case 'UPDATE_UPDATE_STATUS':
            return Object.assign({}, state, {
                account: {
                    password: {
                        updateStatus: action.value
                    } 
                }
            });
        case 'LOGIN_IS_AUTHENTICATING':
            return Object.assign({}, state, {
                login: {
                    isAuthenticating: action.value
                }
            });
        default:
            return state;
    }
}

export default ui;
