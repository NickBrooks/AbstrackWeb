// add comment
export function addComment(noteId, user, body) {
    return {
        type: 'ADD_COMMENT',
        noteId,
        user,
        body
    }
}

// update comment
export function updateComment(noteId, commentId, updatedBody) {
    return {
        type: 'UPDATE_COMMENT',
        noteId,
        commentId,
        updatedBody
    }
}

// delete comment
export function deleteComment(noteId, commentId) {
    return {
        type: 'DELETE_COMMENT',
        noteId,
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