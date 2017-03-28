function login(state = [], action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return action.data;
        case 'LOGIN_FAILURE':
            return [...state, action.nom];
    }
    return state;
}

export default login;