import { apiGetToken } from '../../api/actions';
import { setLocalStorage, clearLocalStorage } from '../../functions';

let clearAuthData = () => {
    clearLocalStorage();
}

function loginSuccess(data) {
    return {
        type: 'LOGIN_SUCCESS',
        data
    }
}

export function loginFailure(error) {
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
            dispatch(loginSuccess(response.data));
        }).catch(error => {
            dispatch(loginFailure(error));
        });
    };
}