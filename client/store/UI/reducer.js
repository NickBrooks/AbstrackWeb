// TODO: Tidy this whole area
function ui(state = [], action) {
    switch (action.type) {
        case 'TOGGLE_APP_VIEW_CHILDREN':
            var newState = Object.assign({}, state);
            newState.appView.displayChildren = action.value;
            return newState;
        case 'TOGGLE_NOM_EDITOR':
            var newState = Object.assign({}, state);
            newState.newNoteModal.open = action.value;
            return newState;
        case 'TOGGLE_NEW_NOM_BUTTON':
            var newState = Object.assign({}, state);
            newState.newNoteButton.show = action.value;
            return newState;
        case 'TOGGLE_PREVIEW_MODE':
            var newState = Object.assign({}, state);
            newState.note.editor.previewMode = action.value;
            return newState;
        case 'TOGGLE_SIDEBAR':
            var newState = Object.assign({}, state);
            newState.sidebar.open = action.value;
            return newState;
        case 'SET_SEARCH_BAR':
            var newState = Object.assign({}, state);
            newState.searchBar = action.value;
            return newState;
        case 'ADD_COMMENT_ERROR':
            var newState = Object.assign({}, state);
            newState.comments.addCommentError = action.error;
            return newState;
        case 'TOGGLE_EDIT_COMMENT_MODE':
            var newState = Object.assign({}, state);
            newState.comments.editComment.errorMsg = action.value;
            return newState;
        case 'LOGIN_ERROR_MESSAGE':
            var newState = Object.assign({}, state);
            newState.login.errorMsg = action.message;
            return newState;
        case 'LOGIN_IS_AUTHENTICATING':
            var newState = Object.assign({}, state);
            newState.login.isAuthenticating = action.value;
            return newState;
        case 'NOM_VIEW_IS_LOADING':
            var newState = Object.assign({}, state);
            newState.noteView.isLoading = action.value;
            return newState;
        case 'UPDATE_NOM_FETCHING_STATUS':
            var newState = Object.assign({}, state);
            newState.note.fetchingStatus = action.value;
            return newState;
        case 'UPDATE_NOM_ADDING_STATUS':
            var newState = Object.assign({}, state);
            newState.note.addingStatus = action.value;
            return newState;
        case 'UPDATE_DRAFT_EDITOR_STATUS':
            var newState = Object.assign({}, state);
            newState.draft.editorStatus = action.value;
            return newState;
        case 'UPDATE_DRAFT_SAVING_STATUS':
            var newState = Object.assign({}, state);
            newState.draft.savingStatus = action.value;
            return newState;
        case 'REGISTER_ERROR_MESSAGE':
            var newState = Object.assign({}, state);
            newState.register.errorMsg = action.message;
            return newState;
        case 'UPDATE_PROFILE_DETAILS_ERROR_MSG':
            var newState = Object.assign({}, state);
            newState.account.profileDetails.errorMsg = action.message;
            return newState;
        case 'UPDATE_PASSWORD_ERROR_MSG':
            var newState = Object.assign({}, state);
            newState.account.password.errorMsg = action.message;
            return newState;
        case 'UPDATE_PROFILE_DETAILS_UPDATE_STATUS':
            var newState = Object.assign({}, state);
            newState.account.profileDetails.updateStatus = action.value;
            return newState;
        case 'UPDATE_PASSWORD_UPDATE_STATUS':
            var newState = Object.assign({}, state);
            newState.account.password.updateStatus = action.value;
            return newState;
        case 'ADD_TRACK_UPDATE_STATUS':
            var newState = Object.assign({}, state);
            newState.tracks.updateStatus = action.value;
            return newState;
        default:
            return state;
    }
}

export default ui;
