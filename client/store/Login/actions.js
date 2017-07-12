import { apiGetToken, apiGetTokenFromRefreshToken, apiRegister, apiForgotPassword } from '../../api';
import { delay, saveLocalStorage, removeLocalStorage } from '../../functions';
import { push } from 'react-router-redux';

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

export function loginIsRefreshingToken(value) {
    return {
        type: 'LOGIN_IS_REFRESHING_TOKEN',
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
    return dispatch => {
        removeLocalStorage("auth");
    };
}

export function purgeStore() {
    return {
        type: 'PURGE_STORE'
    }
}

export function handleLogin(userName, password) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const request = apiGetToken({
                userName,
                password
            });
            dispatch(loginIsAuthenticating(true));

            request.then(response => {
                saveLocalStorage("auth", response.data);
                delay(1000).then(() => {
                    dispatch(loginIsAuthenticating(false));
                    dispatch(push('/'));
                });
                resolve()
            }).catch(error => {
                dispatch(loginIsAuthenticating(false));
                dispatch(loginErrorMsg("Incorrect username or password"));
                reject();
            });
        });
    };
}

export function handleRefreshTokenLogin(token, redirect) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const request = apiGetTokenFromRefreshToken(token);
            dispatch(loginIsRefreshingToken(true));

            request.then(response => {
                saveLocalStorage("auth", response.data);
                delay(1000).then(() => {
                    dispatch(loginIsRefreshingToken(false));
                    if (redirect) {
                        dispatch(push(redirect));
                    }
                });
                resolve();
            }).catch(error => {
                dispatch(push("/login"));
                dispatch(loginIsRefreshingToken(false));
                reject();
            });
        });
    };
}

export function handleRegistration(payload) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const request = apiRegister(payload);

            request.then(response => {
                dispatch(registerIsRegistering(false));
                dispatch(push('/login'));
                resolve();
            }).catch(error => {
                dispatch(registerIsRegistering(false));
                dispatch(registerErrorMsg(error.response.data[0].description));
                reject();
            });
        });
    };
}

export function handleForgotPassword(email) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            const request = apiForgotPassword(email);

            request.then(response => {
                resolve()
            }).catch(error => {
                console.log(error);
                reject();
            });
        });
    };
}

export function handleLogout() {
    return dispatch => {
        dispatch(purgeToken());
        dispatch(purgeStore());
        dispatch(push('/login'));
    };
}