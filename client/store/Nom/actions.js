import { apiGetInbox, apiGetNoms } from '../../api';

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

export function updateNomList(data) {
    return {
        type: 'UPDATE_NOM_LIST',
        data
    }
}

export function handleGetInbox() {
    return (dispatch, getState) => {
        const { token } = getState().login;
        const request = apiGetInbox(token);

        request.then(response => {
            dispatch(updateNomList(response.data.data));
        }).catch(error => {
            console.log(error);
        });
    };
}

export function handleGetNoms(query) {
    return (dispatch, getState) => {
        const { token } = getState().login;
        const request = apiGetNoms(query, token);

        request.then(response => {
            dispatch(updateNomList(response.data.data));
        }).catch(error => {
            console.log(error);
        });
    };
}