// add comment
export function addComment(nomId, user, body) {
    return {
        type: 'ADD_COMMENT',
        nomId,
        user,
        body
    }
}

// update comment
export function updateComment(nomId, commentId, updatedBody) {
    return {
        type: 'UPDATE_COMMENT',
        nomId,
        commentId,
        updatedBody
    }
}

// delete comment
export function deleteComment(nomId, commentId) {
    return {
        type: 'DELETE_COMMENT',
        nomId,
        commentId
    }
}

// toggle which comment (by id) is being edited, or empty for none
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