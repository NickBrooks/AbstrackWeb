import { apiGetToken, apiValidateEmail, apiForgotPassword } from '../../api';
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

export function registerIsValidatingEmail(value) {
    return {
        type: 'REGISTER_IS_VALIDATING_EMAIL',
        value
    }
}

export function registerSetValidEmail(email) {
    return {
        type: 'REGISTER_SET_VALID_EMAIL',
        email
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

export function handleValidateEmail(email) {
    const request = apiValidateEmail(email);

    return dispatch => {
        request.then(response => {
            dispatch(registerSetValidEmail(email));
            dispatch(registerIsValidatingEmail(false));
        }).catch(error => {
            dispatch(registerIsValidatingEmail(false));
            dispatch(registerErrorMsg(error.response.data.message));
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