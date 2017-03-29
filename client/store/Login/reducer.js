function login(state = [], action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return action.data;
        case 'PURGE_TOKEN':
            return null;
        case 'LOGIN_FAILURE':
            return [...state, action.nom];
    }
    return state;
}

export default login;