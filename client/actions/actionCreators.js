// toggle the newNomModal
export function toggleNewNomModal(value) {
    return {
        type: 'TOGGLE_NEW_NOM_MODAL',
        value
    }
}

// add comment
export function addComment(nomId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        nomId,
        author,
        comment
    }
}

export function insertNom(index) {
    return {
        type: 'INSERT_NOM',
        index
    }
}