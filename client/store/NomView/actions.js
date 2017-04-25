import { apiGetInbox, apiGetPinned, apiGetNoms } from '../../api';
import moment from 'moment';

export function nomViewIsLoading(value) {
    return {
        type: 'NOM_VIEW_IS_LOADING',
        value
    }
}

export function updateNomViewList(view, timeFetched) {
    return {
        type: 'UPDATE_NOM_VIEW_LIST',
        view,
        timeFetched: moment.utc().format()
    }
}

export function updateNomStore(data, view) {
    return {
        type: 'UPDATE_NOM_STORE',
        data,
        view,
        timeFetched: moment.utc().format()
    }
}

export function handleGetInbox() {
    return (dispatch, getState) => {
        // denote loading
        dispatch(nomViewIsLoading(true));

        const { token } = getState().login;
        const request = apiGetInbox(token);
        const view = "inbox";

        request.then(response => {
            dispatch(updateNomViewList(view))
            dispatch(nomViewIsLoading(false));
            dispatch(updateNomStore(response.data.data, view));
        }).catch(error => {
            dispatch(nomViewIsLoading(false));
            console.log(error);
        });
    };
}

export function handleGetPinned() {
    return (dispatch, getState) => {
        // denote loading
        dispatch(nomViewIsLoading(true));

        const { token } = getState().login;
        const request = apiGetPinned(token);
        const view = "pinned";

        request.then(response => {
            dispatch(updateNomViewList(view))
            dispatch(nomViewIsLoading(false));
            dispatch(updateNomStore(response.data.data, view));
        }).catch(error => {
            dispatch(nomViewIsLoading(false));
            console.log(error);
        });
    };
}

export function handleGetNoms(query) {
    return (dispatch, getState) => {
        const { token } = getState().login;
        const request = apiGetNoms(query, token);

        request.then(response => {
            dispatch(updateNomStore(response.data.data));
        }).catch(error => {
            console.log(error);
        });
    };
}