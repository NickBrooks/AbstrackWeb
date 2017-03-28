function login(state = [], action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log(action.data);
            return [...state, action.data];
        case 'LOGIN_FAILURE':
            return [...state, action.nom];
    }
    return state;
}

export default login;