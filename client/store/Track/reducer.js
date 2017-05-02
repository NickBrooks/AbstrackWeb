function tracks(state = [], action) {
    switch (action.type) {
        case 'SET_TRACKS':
            return action.data;
    }
    return state;
}

export default tracks;
