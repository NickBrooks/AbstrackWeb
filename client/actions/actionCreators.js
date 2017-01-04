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

// toggle which comment is being edited, or empty for none
export function toggleEditCommentMode(value) {
    return {
        type: 'TOGGLE_EDIT_COMMENT_MODE',
        value
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