function noteEditor(state = [], action) {
    switch (action.type) {
        case 'SET_DRAFT':
            return action.draft;
        case 'SET_DRAFT_SERVER_VALUES':
            var newState = Object.assign({}, state);
            newState.id = action.draft.id;
            newState.createdBy = action.draft.createdBy;
            newState.updatedTime = action.draft.updatedTime;
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
        case 'ADD_DRAFT_HASHTAG':
            var newState = Object.assign({}, state);
            newState.hashtags = [...state.hashtags, action.hashtag];
            return newState;
        case 'SET_DRAFT_TRACK':
            var newState = Object.assign({}, state);
            newState.track = { id: action.trackId };
            return newState;
    }
    return state;
}

export default noteEditor;
