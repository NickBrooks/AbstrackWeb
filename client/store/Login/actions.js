import { apiGetToken, apiRegister, apiForgotPassword } from '../../api';
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

export function registerErrorMsg(message) {
    return {
        type: 'REGISTER_ERROR_MESSAGE',
        message
    }
}

export function registerIsRegistering(value) {
    return {
        type: 'REGISTER_IS_REGISTERING',
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
            dispatch(loginIsAuthenticating(false));
            dispatch(push('/'));
        }).catch(error => {
            dispatch(loginIsAuthenticating(false));
            dispatch(loginErrorMsg("Incorrect username or password"));
        });
    };
}

export function handleRegistration(payload) {
    const request = apiRegister(payload);

    return dispatch => {
        request.then(response => {
            dispatch(registerIsRegistering(false));
            dispatch(push('/login'));
        }).catch(error => {
            dispatch(registerIsRegistering(false));
            dispatch(registerErrorMsg(error.response.data[0].description));
        });
    };
}

export function handleForgotPassword(email) {
    const request = apiForgotPassword(email);

    return dispatch => {
        request.then(response => {}).catch(error => {
            console.log(error);
        });
    };
}

export function handleLogout() {
    return dispatch => {
        dispatch(purgeToken());
        dispatch(push('/login'));
    };
}