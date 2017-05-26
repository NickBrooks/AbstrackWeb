import { apiGetDraft, apiAddDraft, apiUpdateDraft } from '../../api';
import { updateNomStore } from '../Nom/actions'
import { push } from 'react-router-redux';

// update draft fetching status
export function updateDraftFetchingStatus(value) {
    return {
        type: 'UPDATE_DRAFT_FETCHING_STATUS',
        value
    }
}

// update draft saving status
export function updateDraftSavingStatus(value) {
    return {
        type: 'UPDATE_DRAFT_SAVING_STATUS',
        value
    }
}

export function setDraft(payload) {
    return {
        type: 'SET_DRAFT',
        payload
    }
}

export function setDraftTitle(title) {
    return {
        type: 'SET_DRAFT_TITLE',
        title
    }
}

export function setDraftBody(body) {
    return {
        type: 'SET_DRAFT_BODY',
        body
    }
}

export function setDraftHashtags(hashtags) {
    return {
        type: 'SET_DRAFT_HASHTAGS',
        hashtags
    }
}

export function setDraftTrack(trackId) {
    return {
        type: 'SET_DRAFT_TRACK',
        trackId
    }
}

export function handleGetDraft(draftId) {
    return (dispatch) => {
        dispatch(updateDraftFetchingStatus(true));
        const request = apiGetDraft(draftId);

        request.then(response => {
            dispatch(setDraft(response.data));
            dispatch(updateDraftFetchingStatus(false));
        }).catch(error => {
            dispatch(updateDraftFetchingStatus(false));
            console.log(error);
        });
    };
}

export function handleAddDraft(draft) {
    return (dispatch) => {
        dispatch(updateDraftSavingStatus("Saving"));
        delete draft.createdBy;
        delete draft.id;
        delete draft.updatedTime;
        const request = apiAddDraft(draft);

        request.then(response => {
            dispatch(updateNomStore([response.data], "drafts"));
            dispatch(updateDraftSavingStatus("Saved"));
            dispatch(push("/new/nom/" + response.data.id));
        }).catch(error => {
            dispatch(updateDraftSavingStatus("Error..."));
            console.log(error);
        });
    };
}

export function handleSaveDraft(draft) {
    return (dispatch) => {
        dispatch(updateDraftSavingStatus("Saving"));
        const request = apiUpdateDraft(draft.id, draft);

        request.then(response => {
            dispatch(updateNomStore([response.data], "drafts"));
            dispatch(updateDraftSavingStatus("Saved"));
        }).catch(error => {
            dispatch(updateDraftSavingStatus("Error..."));
            console.log(error);
        });
    };
}