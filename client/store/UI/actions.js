// toggle the newNomModal
export function toggleNomEditor(value) {
    return {
        type: 'TOGGLE_NOM_EDITOR',
        value
    }
}

export function toggleNewNomButton(value) {
    return {
        type: 'TOGGLE_NEW_NOM_BUTTON',
        value
    }
}

export function setSearchBar(value) {
    return {
        type: 'SET_SEARCH_BAR',
        value
    }
}