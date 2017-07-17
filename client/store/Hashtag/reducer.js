function hashtags(state = [], action) {
    switch (action.type) {
        case 'UPDATE_HASHTAGS_STORE':
            return action.data;
        default:
            return state;
    }
}

export default hashtags;
