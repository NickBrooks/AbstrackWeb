import Axios from 'axios';
import { loadLocalStorage } from '../functions';

// set some default stuff

function getApiUrl() {
    const apiUrl = localStorage.getItem('test.apiUrl');

    if (apiUrl) { return apiUrl; }

    return "https://api.nommer.co/api/";
}

function getAuthHeader() {
    var auth = loadLocalStorage("auth");

    if (auth == null || auth.token == null) {
        return null;
    }

    return {
        headers: {
            Authorization: "bearer " + auth.token
        }
    }
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

export function apiGetNom(nomId) {
    return Axios.get("noms/" + nomId, getAuthHeader());
}

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
        return Axios.post("pinned/" + nomId, null, getAuthHeader());
    } else {
        return Axios.delete("pinned/" + nomId, getAuthHeader());
    }
}

// drafts

export function apiGetDrafts() {
    return Axios.get("drafts", getAuthHeader());
}

// tracks

export function apiGetTracks() {
    return Axios.get("tracks", getAuthHeader());
}

export function apiAddTrack(track) {
    return Axios.post("tracks", track, getAuthHeader());
}

export function apiUpdateTrack(trackId, track) {
    return Axios.put("tracks/" + trackId, track, getAuthHeader());
}

export function apiDeleteTrack(trackId) {
    return Axios.delete("tracks/" + trackId, getAuthHeader());
}