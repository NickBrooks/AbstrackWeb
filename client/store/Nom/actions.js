import { apiAddNom, apiPinNom, apiGetNom } from '../../api';
import moment from 'moment';
import { push } from 'react-router-redux';

// remove nom from store
export function removeNomFromStore(nomId) {
    return {
        type: 'REMOVE_NOM_FROM_STORE',
        nomId
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
export function addRemoveViewFromNom(nomId, value, view) {
    return {
        type: 'ADD_REMOVE_VIEW_FROM_NOM',
        nomId,
        value,
        view
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

// update nom adding status
export function updateNomAddingStatus(value) {
    return {
        type: 'UPDATE_NOM_ADDING_STATUS',
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

export function handleAddNom(newNomDTO) {
    return (dispatch) => {
        dispatch(updateNomAddingStatus(true));
        const request = apiAddNom(newNomDTO);

        request.then(response => {
            dispatch(updateNomStore([response.data], newNomDTO.skipInbox ? undefined : "inbox"));
            dispatch(addRemoveViewFromNom(response.data.id, false, "drafts"));
            dispatch(push("/n/" + response.data.id))
            dispatch(updateNomAddingStatus(false));
        }).catch(error => {
            dispatch(updateNomAddingStatus(false));
            console.log(error);
        });
    };
}

export function handlePinNom(nomId, value) {
    return (dispatch) => {
        dispatch(addRemoveViewFromNom(nomId, value, "pinned"));
        const request = apiPinNom(nomId, value);

        request.catch(error => {
            console.log(error);
            dispatch(addRemoveViewFromNom(nomId, value ? false : true, "pinned"));
        });
    };
}