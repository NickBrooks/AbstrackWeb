function ui(state = [], action) {
    switch (action.type) {
        case 'TOGGLE_NEW_NOM_MODAL':
            return [...state, {
                open: action.value
            }];
        default:
            return state;
    }
}

export default ui;
