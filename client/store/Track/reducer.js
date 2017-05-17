function tracks(state = [], action) {
    switch (action.type) {
        case 'SET_TRACKS':
            return action.data;
        case 'ADD_TRACK':
            return [...state, action.track];
    }
    return state;
}

export default tracks;
