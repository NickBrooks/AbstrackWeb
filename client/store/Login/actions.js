import { apiGetToken } from '../../api/actions';
import { setLocalStorage, clearLocalStorage } from '../../functions';

let clearAuthData = () => {
    clearLocalStorage();
}

function loginSuccess(response) {
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

export function handleLogin(userName, password) {
    const request = apiGetToken({
        userName,
        password
    });

    return dispatch => {
        request.then(response => {
            Promise.all([
                dispatch(setLocalStorage("auth", JSON.stringify(response.data))),
                dispatch(loginSuccess(response))
            ])
        }).catch(error => {
            Promise.all([
                dispatch(loginFailure(error))
            ])
        });
    };
}