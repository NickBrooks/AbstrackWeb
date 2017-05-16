function tracks(state = [], action) {
    switch (action.type) {
        case 'SET_TRACKS':
            return action.data;
        case 'ADD_TRACK':
            return state.push(action.track);
    }
    return state;
}

export default tracks;
