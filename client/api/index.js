import Axios from 'axios';

function getApiUrl() {
    const apiUrl = localStorage.getItem('test.apiUrl');

    if (apiUrl) { return apiUrl; }

    return "https://api.nommer.co/api/";
}

const apiUrl = getApiUrl();

// login

export function apiGetToken(payload) {
    return Axios.post(apiUrl + "auth/token", {
        userName: payload.userName,
        password: payload.password
    });
}

export function apiForgotPassword(email) {
    return Axios.post(apiUrl + "auth/forgot-password", {
        email
    });
}

// registration

export function apiRegister(payload) {
    return Axios.post(apiUrl + "register", payload);
}

// account

export function apiGetAccount(token) {
    return Axios.get(apiUrl + "account", {
        headers: {
            Authorization: "bearer " + token
        }
    });
}

export function apiUpdateProfileDetails(updatedDetails, token) {
    return Axios.put(
        apiUrl + "account/profile-details", updatedDetails, {
            headers: {
                Authorization: "bearer " + token
            }
        });
}

export function apiUpdatePassword(currentPassword, newPassword, token) {
    return Axios.post(apiUrl + "account/password", {
        currentPassword,
        newPassword
    }, {
            headers: {
                Authorization: "bearer " + token
            }
        });
}

// noms

export function apiGetInbox(token) {
    return Axios.get(apiUrl + "inbox", {
        headers: {
            Authorization: "bearer " + token
        }
    });
}

export function apiGetNoms(query, token) {
    return Axios.get(apiUrl + "noms", {
        headers: {
            Authorization: "bearer " + token
        }
    });
}