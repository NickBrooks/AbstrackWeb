import { apiGetToken } from '../../api/actions';
import { setLocalStorage, clearLocalStorage } from '../../functions';

function loginSuccess(response) {
    return {
        type: 'LOGIN_SUCCESS',
        response
    }
}

function loginFailure(error) {
    return {
        type: 'LOGIN_FAILURE',
        error
    }
}

export function handleLogin(userName, password) {
    const request = apiGetToken({
        userName,
        password
    });

    return dispatch => {
        request.then(response => {
            dispatch(loginSuccess(response))
        }).catch(error => {
            dispatch(loginFailure(error))
        });
    };
}