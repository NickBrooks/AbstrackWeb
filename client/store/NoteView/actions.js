import { apiGetInbox, apiGetPinned, apiSearchNotes, apiGetDrafts } from '../../api';
import { updateNoteStore, removeViewFromNoteStore } from '../Note/actions';
import moment from 'moment';

export function noteViewIsLoading(value) {
    return {
        type: 'NOTE_VIEW_IS_LOADING',
        value
    }
}

export function updateNoteViewList(view, timeFetched) {
    return {
        type: 'UPDATE_NOTE_VIEW_LIST',
        view,
        timeFetched: moment.utc().format()
    }
}

export function handleGetInbox(view) {
    return (dispatch) => {
        // denote loading
        dispatch(noteViewIsLoading(true));

        const request = apiGetInbox();

        request.then(response => {
            dispatch(updateNoteViewList(view));
            dispatch(noteViewIsLoading(false));
            dispatch(removeViewFromNoteStore(view));
            dispatch(updateNoteStore(response.data.data, view));
        }).catch(error => {
            dispatch(noteViewIsLoading(false));
            console.log(error);
        });
    };
}

export function handleGetPinned(view) {
    return (dispatch) => {
        // denote loading
        dispatch(noteViewIsLoading(true));

        const request = apiGetPinned();

        request.then(response => {
            dispatch(updateNoteViewList(view));
            dispatch(noteViewIsLoading(false));
            dispatch(removeViewFromNoteStore(view));
            dispatch(updateNoteStore(response.data.data, view));
        }).catch(error => {
            dispatch(noteViewIsLoading(false));
            console.log(error);
        });
    };
}

export function handleSearchNotes(view, query) {
    return (dispatch) => {
        // denote loading
        dispatch(noteViewIsLoading(true));
        const request = apiSearchNotes(query);

        request.then(response => {
            dispatch(updateNoteViewList(view));
            dispatch(noteViewIsLoading(false));
            dispatch(removeViewFromNoteStore(view));
            dispatch(updateNoteStore(response.data.data, view));
        }).catch(error => {
            dispatch(noteViewIsLoading(false));
            console.log(error);
        });
    };
}

export function handleGetDrafts(view) {
    return (dispatch) => {
        // denote loading
        dispatch(noteViewIsLoading(true));

        const request = apiGetDrafts();

        request.then(response => {
            dispatch(updateNoteViewList(view))
            dispatch(noteViewIsLoading(false));
            dispatch(removeViewFromNoteStore(view));
            dispatch(updateNoteStore(response.data.data, view));
        }).catch(error => {
            dispatch(noteViewIsLoading(false));
            console.log(error);
        });
    };
}