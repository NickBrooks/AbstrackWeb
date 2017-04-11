import Axios from 'axios';

function getApiUrl() {
    const apiUrl = localStorage.getItem('test.apiUrl');

    if (apiUrl) { return apiUrl; }

    return "https://api.nommer.co/api/";
}

const apiUrl = getApiUrl();

// authentication

export function apiGetToken(payload) {
    return Axios.post(apiUrl + "auth/token", {
        userName: payload.userName,
        password: payload.password
    });
}

// registration

export function apiValidateEmail(email) {
    return Axios.post(apiUrl + "register/validate-email", {
        email
    });
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
    return Axios.get(apiUrl + "noms", {
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