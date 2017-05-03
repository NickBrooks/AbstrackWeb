import Axios from 'axios';
import { getAuthHeader } from './auth';

// set some default stuff

function getApiUrl() {
    const apiUrl = localStorage.getItem('test.apiUrl');

    if (apiUrl) { return apiUrl; }

    return "https://api.nommer.co/api/";
}

Axios.defaults.baseURL = getApiUrl();

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
    return Axios.get("account", getAuthHeader());
}

export function apiUpdateProfileDetails(updatedDetails) {
    return Axios.put("account/profile-details", updatedDetails, getAuthHeader());
}

export function apiUpdatePassword(currentPassword, newPassword) {
    return Axios.post("account/password", {
        currentPassword,
        newPassword
    }, getAuthHeader());
}

// noms

export function apiGetInbox() {
    return Axios.get("inbox", getAuthHeader());
}

export function apiGetPinned() {
    return Axios.get("pinned", getAuthHeader());
}

export function apiSearchNoms(query) {
    return Axios.post("search/noms", query, getAuthHeader());
}

export function apiPinNom(nomId, value) {
    if (value) {
        return Axios.post("pinned/" + nomId, getAuthHeader());
    } else {
        return Axios.delete("pinned/" + nomId, getAuthHeader());
    }
}

// tracks

export function apiGetTracks() {
    return Axios.get("tracks", getAuthHeader());
}