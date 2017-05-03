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

export function clearLocalStorage() {
    for (var i = 0, len = localStorage.length; i < len; ++i) {
        if ("nm." == localStorage.key(i).substring(0, 3)) {
            localStorage.removeItem(localStorage.key(i));
        }
    }
}

export function checkPasswordStrength(password) {
    var re = new RegExp("^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8,}$");
    return re.test(password);
}

export function extractImagesFromString(string) {
    // https://regex101.com/r/vS2jJ4/8
    const regex = /\b(https?:\/\/\S+(?:png|jpe?g|gif)\S*)\b/igm;
    return string.match(regex);
}

export function extractYoutubeFromString(string) {
    // https://regex101.com/r/muukhG/1
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i
    return string.match(regex);
}

export const loadLocalStorage = (key) => {
    try {
        const serialized = localStorage.getItem(key);
        if (serialized === null) {
            return undefined;
        }
        return JSON.parse(serialized);
    } catch (err) {
        console.log(err);
        return undefined;
    }
}

export const saveLocalStorage = (key, value) => {
    try {
        const serialized = JSON.stringify(value);
        localStorage.setItem(key, serialized);
    } catch (err) {
        console.log(err);
    }
}

export const removeLocalStorage = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (err) {
        console.log(err);
    }
}