function account(state = [], action) {
    switch (action.type) {
        case 'SET_ACCOUNT':
            return action.data;
    }
    return state;
}

export default account;
