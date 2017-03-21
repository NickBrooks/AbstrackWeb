export function loginSuccess(response) {
    return {
        type: 'LOGIN_SUCCESS',
        response
    }
}

export function loginFailure(error) {
    return {
        type: 'LOGIN_FAILURE',
        error
    }
}