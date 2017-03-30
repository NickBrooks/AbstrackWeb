function account(state = [], action) {
    switch (action.type) {
        case 'GET_ACCOUNT_SUCCESS':
            return action.data;
    }
    return state;
}

export default account;
