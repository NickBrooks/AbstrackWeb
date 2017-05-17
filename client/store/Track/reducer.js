function tracks(state = [], action) {
    switch (action.type) {
        case 'SET_TRACKS':
            return action.data;
        case 'ADD_TRACK':
            return [...state, action.track];
        case 'UPDATE_TRACK':
            return state.map(track => track.id === action.track.id ?
                // replace the track that matches
                action.track :
                // otherwise return track
                track
            );
    }
    return state;
}

export default tracks;
