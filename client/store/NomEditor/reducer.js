function nomEditor(state = [], action) {
    switch (action.type) {
        case 'SET_DRAFT':
            return action.draft;
        case 'SET_DRAFT_ID':
            var newState = Object.assign({}, state);
            newState.id = action.draftId;
            return newState;
        case 'SET_DRAFT_TITLE':
            var newState = Object.assign({}, state);
            newState.title = action.title;
            return newState;
        case 'SET_DRAFT_BODY':
            var newState = Object.assign({}, state);
            newState.body = action.body;
            return newState;
        case 'TOGGLE_SKIP_INBOX':
            var newState = Object.assign({}, state);
            newState.skipInbox = action.value;
            return newState;
        case 'SET_DRAFT_HASHTAGS':
            var newState = Object.assign({}, state);
            newState.hashtags = action.hashtags;
            return newState;
        case 'SET_DRAFT_TRACK':
            var newState = Object.assign({}, state);
            newState.track = { id: action.trackId };
            return newState;
    }
    return state;
}

export default nomEditor;
