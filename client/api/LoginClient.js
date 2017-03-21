import Axios from 'axios';
import getApiUrl from './ApiUrl'

const apiUrl = getApiUrl();

export function apiGetToken(userName, password) {
    const request = Axios.post(apiUrl + "auth/token", {
            userName,
            password
        });

    return dispatch => {
        request.then(response => {
            console.log(response);
            dispatch({ type: "LOGIN_SUCCESS", payload: response })
        }).catch(error => {
            console.log(error);
            dispatch({ type: "LOGIN_FAILURE", payload: error })
        });
    };
}