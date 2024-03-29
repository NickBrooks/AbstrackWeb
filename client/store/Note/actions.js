import { apiAddNote, apiArchiveNote, apiPinNote, apiGetNote } from '../../api';
import moment from 'moment';
import { push } from 'react-router-redux';

// remove note from store
export function removeNoteFromStore(noteId) {
    return {
        type: 'REMOVE_NOTE_FROM_STORE',
        noteId
    }
}

// removes a particular view from the note store
export function removeViewFromNoteStore(view) {
    return {
        type: 'REMOVE_VIEW_FROM_NOTE_STORE',
        view
    }
}

// update the list of notes
export function updateNoteStore(data, view) {
    return {
        type: 'UPDATE_NOTE_STORE',
        data,
        view,
        timeFetched: moment.utc().format()
    }
}

// pin or unpin a note
export function addRemoveViewFromNote(noteId, value, view) {
    return {
        type: 'ADD_REMOVE_VIEW_FROM_NOTE',
        noteId,
        value,
        view
    }
}

// add new hashtags to note
export function addHashtagToNote(hashtags, noteId) {
    return {
        type: 'ADD_HASHTAG_TO_NOTE',
        hashtags,
        noteId
    }
}

// remove hashtags from note
export function removeHashtagsFromNote(hashtags, noteId) {
    return {
        type: 'REMOVE_HASHTAGS_FROM_NOTE',
        hashtags,
        noteId
    }
}

// update note fetching status
export function updateNoteFetchingStatus(value) {
    return {
        type: 'UPDATE_NOTE_FETCHING_STATUS',
        value
    }
}

// update note adding status
export function updateNoteAddingStatus(value) {
    return {
        type: 'UPDATE_NOTE_ADDING_STATUS',
        value
    }
}

export function handleGetNote(noteId) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(updateNoteFetchingStatus(true));
            const request = apiGetNote(noteId);

            request.then(response => {
                dispatch(updateNoteStore([response.data]));
                dispatch(updateNoteFetchingStatus(false));
                resolve();
            }).catch(error => {
                dispatch(updateNoteFetchingStatus(false));
                console.log(error);
                reject();
            });
        });
    };
}

export function handleAddNote(newNoteDTO) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(updateNoteAddingStatus(true));
            const request = apiAddNote(newNoteDTO);

            request.then(response => {
                dispatch(updateNoteStore([response.data], newNoteDTO.skipInbox ? undefined : "inbox"));
                dispatch(addRemoveViewFromNote(response.data.id, false, "drafts"));
                dispatch(push("/n/" + response.data.id))
                dispatch(updateNoteAddingStatus(false));
                resolve();
            }).catch(error => {
                dispatch(updateNoteAddingStatus(false));
                console.log(error);
                reject();
            });
        });
    };
}

export function handlePinNote(noteId, value) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(addRemoveViewFromNote(noteId, value, "pinned"));
            const request = apiPinNote(noteId, value);

            request.then(() => {
                resolve();
            }).catch(error => {
                console.log(error);
                dispatch(addRemoveViewFromNote(noteId, value ? false : true, "pinned"));
                reject();
            });
        });
    };
}

export function handleInboxNote(noteId, value) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(addRemoveViewFromNote(noteId, value, "inbox"));
            const request = apiArchiveNote(noteId, value);

            request.then(() => {
                resolve();
            }).catch(error => {
                console.log(error);
                dispatch(addRemoveViewFromNote(noteId, value ? false : true, "inbox"));
                reject();
            });
        });
    };
}