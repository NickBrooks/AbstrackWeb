//CLEANUP: fake guid
export function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

export function conformHashtags(hashtags) {
    hashtags = hashtags.replace(/\s/g, '');
    hashtags = hashtags.replace(/[^\w,]|_/g, '');
    return hashtags.split(',');
}

export function setLocalStorage(key, value) {
    localStorage.setItem(`nm.${key}`, value);
}

export function getLocalStorage(key, value) {
    localStorage.getItem(`nm.${key}`);
}

export function clearLocalStorage() {
    for ( var i = 0, len = localStorage.length; i < len; ++i ) {
        if ("nm." == localStorage.key(i).substring(0,3)) {
            localStorage.removeItem(localStorage.key(i));
        }
    }
}