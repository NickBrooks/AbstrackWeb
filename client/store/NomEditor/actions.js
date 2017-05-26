import { apiGetDraft, apiAddDraft, apiUpdateDraft } from '../../api';
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

export function handleGetDraft(draftId) {
    return (dispatch) => {
        dispatch(updateDraftFetchingStatus(true));
        const request = apiGetDraft(draftId);

        request.then(response => {
            dispatch(updateNomStore([response.data], "drafts"));
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
        delete draft.data.createdBy;
        delete draft.data.id;
        delete draft.data.updatedTime;
        const request = apiAddDraft(draft.data);

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
        const request = apiUpdateDraft(draft.id, draft.data);

        request.then(response => {
            dispatch(updateNomStore([response.data], "drafts"));
            dispatch(updateDraftSavingStatus("Saved"));
        }).catch(error => {
            dispatch(updateDraftSavingStatus("Error..."));
            console.log(error);
        });
    };
}