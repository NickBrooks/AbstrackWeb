import { apiGetToken } from '../../api/actions';
import { setLocalStorage, clearLocalStorage } from '../../functions';
import { push } from 'react-router-redux';

let clearAuthData = () => {
    clearLocalStorage();
}

function loginSuccess(data) {
    return {
        type: 'LOGIN_SUCCESS',
        data
    }
}

export function msgLoginError(message) {
    return {
        type: 'MSG_LOGIN_ERROR',
        message
    }
}

export function purgeToken() {
    return {
        type: 'PURGE_TOKEN'
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
            dispatch(msgLoginError(undefined));
            dispatch(push('/'));
        }).catch(error => {
            dispatch(msgLoginError("Incorrect username or password"));
        });
    };
}

export function handleLogout() {
    return dispatch => {
        dispatch(purgeToken());
        dispatch(push('/login'));
    };
}