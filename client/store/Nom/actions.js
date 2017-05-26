import { apiPinNom, apiGetNom, apiGetDraft, apiAddDraft, apiUpdateDraft } from '../../api';
import moment from 'moment';

//add a new nom
export function addNom(nom) {
    return {
        type: 'ADD_NOM',
        nom
    }
}

// removes a particular view from the nom store
export function removeViewFromNomStore(view) {
    return {
        type: 'REMOVE_VIEW_FROM_NOM_STORE',
        view
    }
}

// update the list of noms
export function updateNomStore(data, view) {
    return {
        type: 'UPDATE_NOM_STORE',
        data,
        view,
        timeFetched: moment.utc().format()
    }
}

// pin or unpin a nom
export function pinNom(nomId, value) {
    return {
        type: 'PIN_NOM',
        nomId,
        value
    }
}

// add new hashtags to nom
export function addHashtagToNom(hashtags, nomId) {
    return {
        type: 'ADD_HASHTAG_TO_NOM',
        hashtags,
        nomId
    }
}

// remove hashtags from nom
export function removeHashtagsFromNom(hashtags, nomId) {
    return {
        type: 'REMOVE_HASHTAGS_FROM_NOM',
        hashtags,
        nomId
    }
}

// update nom fetching status
export function updateNomFetchingStatus(value) {
    return {
        type: 'UPDATE_NOM_FETCHING_STATUS',
        value
    }
}

export function handleGetNom(nomId) {
    return (dispatch) => {
        dispatch(updateNomFetchingStatus(true));
        const request = apiGetNom(nomId);

        request.then(response => {
            dispatch(updateNomStore([response.data]));
            dispatch(updateNomFetchingStatus(false));
        }).catch(error => {
            dispatch(updateNomFetchingStatus(false));
            console.log(error);
        });
    };
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