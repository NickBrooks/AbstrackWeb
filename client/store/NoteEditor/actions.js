import { apiGetDraft, apiAddDraft, apiDeleteDraft, apiUpdateDraft } from '../../api';
import { removeNoteFromStore, updateNoteStore } from '../Note/actions'
import { push } from 'react-router-redux';

// update draft fetching status
export function updateDraftEditorStatus(value) {
    return {
        type: 'UPDATE_DRAFT_EDITOR_STATUS',
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

// handle the skip inbox toggle
export function toggleSkipInbox(value) {
    return {
        type: 'TOGGLE_SKIP_INBOX',
        value
    }
}

export function setDraft(draft) {
    return {
        type: 'SET_DRAFT',
        draft
    }
}

export function setDraftServerValues(draft) {
    return {
        type: 'SET_DRAFT_SERVER_VALUES',
        draft
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

export function addDraftHashtag(hashtag) {
    return {
        type: 'ADD_DRAFT_HASHTAG',
        hashtag
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
        return new Promise((resolve, reject) => {
            dispatch(updateDraftEditorStatus("loading"));
            const request = apiGetDraft(draftId);

            request.then(response => {
                dispatch(setDraft(response.data));
                dispatch(updateDraftEditorStatus("editor"));
                resolve();
            }).catch(error => {
                dispatch(updateDraftEditorStatus("editor"));
                dispatch(push("/new/note/"));
                console.log(error);
                reject();
            });
        });
    };
}

export function handleAddDraft(payload) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(updateDraftSavingStatus("Saving"));
            var draft = Object.assign({}, payload);
            delete draft.createdBy;
            delete draft.id;
            delete draft.updatedTime;
            const request = apiAddDraft(draft);

            request.then(response => {
                dispatch(updateNoteStore([response.data], "drafts"));
                dispatch(setDraftServerValues(response.data));
                dispatch(updateDraftSavingStatus("Saved"));
                dispatch(push("/new/note/" + response.data.id));
                resolve();
            }).catch(error => {
                dispatch(updateDraftSavingStatus("Error..."));
                console.log(error);
                reject();
            });
        });
    };
}

export function handleSaveDraft(draftId, draft) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(updateDraftSavingStatus("Saving"));
            const request = apiUpdateDraft(draftId, draft);

            request.then(response => {
                dispatch(updateNoteStore([response.data]));
                dispatch(setDraftServerValues(response.data));
                dispatch(updateDraftSavingStatus("Saved"));
                resolve();
            }).catch(error => {
                dispatch(updateDraftSavingStatus("Error..."));
                console.log(error);
                reject();
            });
        });
    };
}

export function handleDeleteDraft(draftId) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const request = apiDeleteDraft(draftId);

            request.then(response => {
                dispatch(removeNoteFromStore(draftId));
                dispatch(push('/drafts'));
                resolve();
            }).catch(error => {
                dispatch(push('/drafts'));
                console.log(error);
                reject();
            });
        });
    };
}