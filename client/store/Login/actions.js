import Axios from 'axios';
import getApiUrl from '../../api/ApiUrl'

const apiUrl = getApiUrl();

export function handleLogin(userName, password) {
    const request = Axios.post(apiUrl + "auth/token", {
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