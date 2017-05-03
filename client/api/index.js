import Axios from 'axios';
import { loadLocalStorage } from '../functions';

// set some default stuff

function getApiUrl() {
    const apiUrl = localStorage.getItem('test.apiUrl');

    if (apiUrl) { return apiUrl; }

    return "https://api.nommer.co/api/";
}

export function getAuthToken() {
    var auth = loadLocalStorage("auth");

    if (auth == null || auth.token == null) {
        return null;
    }

    return auth.token;
}

var token = getAuthToken();
Axios.defaults.baseURL = getApiUrl();
Axios.defaults.headers.common['Authorization'] = (token ? 'bearer ' + token : undefined);

// login

export function apiGetToken(payload) {
    return Axios.post("auth/token", payload);
}

export function apiForgotPassword(email) {
    return Axios.post("auth/forgot-password", {
        email
    });
}

// registration

export function apiRegister(payload) {
    return Axios.post("register", payload);
}

// account

export function apiGetAccount() {
    return Axios.get("account");
}

export function apiUpdateProfileDetails(updatedDetails) {
    return Axios.put("account/profile-details", updatedDetails);
}

export function apiUpdatePassword(currentPassword, newPassword) {
    return Axios.post("account/password", {
        currentPassword,
        newPassword
    });
}

// noms

export function apiGetInbox() {
    return Axios.get("inbox");
}

export function apiGetPinned() {
    return Axios.get("pinned");
}

export function apiSearchNoms(query) {
    return Axios.post("search/noms", query);
}

export function apiPinNom(nomId, value) {
    if (value) {
        return Axios.post("pinned/" + nomId);
    } else {
        return Axios.delete("pinned/" + nomId);
    }
}

// tracks

export function apiGetTracks() {
    return Axios.get("tracks");
}