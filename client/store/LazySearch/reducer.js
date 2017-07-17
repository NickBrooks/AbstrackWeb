function lazySearch(state = [], action) {
    switch (action.type) {
        case 'UPDATE_LAZY_SEARCH_RESULTS':
            return action.data;
        default:
            return state;
    }
}

export default lazySearch;
