function login(state = [], action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log(action.response);
            return [...state, action.nom];
        case 'LOGIN_FAILURE':
            console.log(action.error);
            return [...state, action.nom];
    }
    return state;
}

export default login;