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

export function loginFailure(error) {
    return {
        type: 'LOGIN_FAILURE',
        error
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
            dispatch(push('/'));
        }).catch(error => {
            dispatch(loginFailure(error));
        });
    };
}

export function handleLogout() {
    return dispatch => {
        dispatch(purgeToken());
        dispatch(push('/login'));
    };
}