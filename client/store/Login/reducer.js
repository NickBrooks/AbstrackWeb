function login(state = [], action) {
    switch (action.type) {
        case 'PURGE_TOKEN':
            return null;
        case 'LOGIN_FAILURE':
            return null;
    }
    return state;
}

export default login;