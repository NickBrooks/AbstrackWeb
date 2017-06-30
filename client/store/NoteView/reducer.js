function noteViews(state = [], action) {
    switch (action.type) {
        case 'UPDATE_NOTE_VIEW_LIST':
            var newState = Object.assign({}, state);
            newState[action.view] = {
                timeFetched: action.timeFetched
            }
            return newState;
        default:
            return state;
    }
}

export default noteViews;
