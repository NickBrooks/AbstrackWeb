import { apiPinNom } from '../../api';

//add a new nom
export function addNom(nom) {
    return {
        type: 'ADD_NOM',
        nom
    }
}

//pin or unpin a nom
export function pinNom(nomId, value) {
    return {
        type: 'PIN_NOM',
        nomId,
        value
    }
}

//add new hashtags to nom
export function addHashtagToNom(hashtags, nomId) {
    return {
        type: 'ADD_HASHTAG_TO_NOM',
        hashtags,
        nomId
    }
}

//remove hashtags from nom
export function removeHashtagsFromNom(hashtags, nomId) {
    return {
        type: 'REMOVE_HASHTAGS_FROM_NOM',
        hashtags,
        nomId
    }
}

export function handlePinNom(nomId, value) {
    return (dispatch) => {
        dispatch(pinNom(nomId, value));
        const request = apiPinNom(nomId, value);

        request.catch(error => {
            console.log(error);
            if (value) {
                dispatch(pinNom(nomId, false));
            } else {
                dispatch(pinNom(nomId, true));
            }
        });
    };
}