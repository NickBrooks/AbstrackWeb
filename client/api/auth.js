import { loadLocalStorage } from '../functions';

export function getAuthHeader() {
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