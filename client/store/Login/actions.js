import { apiGetToken } from '../../api';
import { push } from 'react-router-redux';

function loginSuccess(data) {
    return {
        type: 'LOGIN_SUCCESS',
        data
    }
}

export function loginErrorMsg(message) {
    return {
        type: 'LOGIN_ERROR_MESSAGE',
        message
    }
}

export function loginIsAuthenticating(value) {
    return {
        type: 'LOGIN_IS_AUTHENTICATING',
        value
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
            dispatch(loginErrorMsg(false));
            dispatch(loginIsAuthenticating(false));
            dispatch(push('/'));
        }).catch(error => {
            dispatch(loginIsAuthenticating(false));
            dispatch(loginErrorMsg("Incorrect username or password"));
        });
    };
}

export function handleLogout() {
    return dispatch => {
        dispatch(purgeToken());
        dispatch(push('/login'));
    };
}