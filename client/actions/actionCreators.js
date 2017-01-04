// toggle the newNomModal
export function toggleNewNomModal(value) {
    return {
        type: 'TOGGLE_NEW_NOM_MODAL',
        value
    }
}

// add comment
export function addComment(nomId, user, body) {
    return {
        type: 'ADD_COMMENT',
        nomId,
        user,
        body
    }
}

// add comment error
export function addCommentError(error) {
    return {
        type: 'ADD_COMMENT_ERROR',
        error
    }
}

export function insertNom(index) {
    return {
        type: 'INSERT_NOM',
        index
    }
}