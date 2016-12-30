// toggle the newNomModal
export function toggleNewNomModal(value) {
    return {
        type: 'TOGGLE_NEW_NOM_MODAL',
        value
    }
}

export function insertNom(index) {
    return {
        type: 'INSERT_NOM',
        index
    }
}