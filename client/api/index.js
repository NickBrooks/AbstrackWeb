import Axios from 'axios';

function getApiUrl() {
    const apiUrl = localStorage.getItem('test.apiUrl');

    if(apiUrl) { return apiUrl; }

    return "https://api.nommer.co/api/";
}

const apiUrl = getApiUrl();

export function apiGetToken(payload) {
    return Axios.post(apiUrl + "auth/token", {
            userName: payload.userName,
            password: payload.password
        });
}

export function apiGetUserProfile(token) {
    return Axios.get(apiUrl + "account", {
        headers: {
            Authorization: token
        }
    });
}
