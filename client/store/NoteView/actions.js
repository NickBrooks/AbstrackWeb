import { apiGetInbox, apiGetPinned, apiGetNotes, apiGetDrafts } from '../../api';
import { updateNoteStore, removeViewFromNoteStore } from '../Note/actions';
import moment from 'moment';

export function noteViewIsLoading(value) {
    return {
        type: 'NOTE_VIEW_IS_LOADING',
        value
    }
}

export function updateNoteViewList(view, count) {
    return {
        type: 'UPDATE_NOTE_VIEW_LIST',
        view,
        count,
        timeFetched: moment.utc().format()
    }
}

export function handleGetInbox(view) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(noteViewIsLoading(true));
            const request = apiGetInbox();

            request.then(response => {
                dispatch(removeViewFromNoteStore(view));
                dispatch(updateNoteStore(response.data.data, view));
                dispatch(updateNoteViewList(view, response.data.data ? response.data.data : 0));
                dispatch(noteViewIsLoading(false));
                resolve();
            }).catch(error => {
                dispatch(updateNoteViewList(view, 0));
                dispatch(noteViewIsLoading(false));
                console.log(error);
                reject();
            });
        });
    };
}

export function handleGetPinned(view) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(noteViewIsLoading(true));
            const request = apiGetPinned();

            request.then(response => {
                dispatch(removeViewFromNoteStore(view));
                dispatch(updateNoteStore(response.data.data, view));
                dispatch(updateNoteViewList(view, response.data.data ? response.data.data : 0));
                dispatch(noteViewIsLoading(false));
                resolve();
            }).catch(error => {
                dispatch(updateNoteViewList(view, 0));
                dispatch(noteViewIsLoading(false));
                console.log(error);
                reject();
            });
        });
    };
}

export function handleGetNotes(view, query) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(noteViewIsLoading(true));
            const request = apiGetNotes(query);

            request.then(response => {
                dispatch(removeViewFromNoteStore(view));
                dispatch(updateNoteStore(response.data.data, view));
                dispatch(updateNoteViewList(view, response.data.data ? response.data.data : 0));
                dispatch(noteViewIsLoading(false));
                resolve();
            }).catch(error => {
                dispatch(updateNoteViewList(view, 0));
                dispatch(noteViewIsLoading(false));
                console.log(error);
                reject();
            });
        });
    };
}

export function handleGetDrafts(view) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(noteViewIsLoading(true));
            const request = apiGetDrafts();

            request.then(response => {
                dispatch(removeViewFromNoteStore(view));
                dispatch(updateNoteStore(response.data.data, view));
                dispatch(updateNoteViewList(view, response.data.data ? response.data.data : 0));
                dispatch(noteViewIsLoading(false));
                resolve();
            }).catch(error => {
                dispatch(updateNoteViewList(view, 0));
                dispatch(noteViewIsLoading(false));
                console.log(error);
                reject();
            });
        });
    };
}