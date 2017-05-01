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
    return (dispatch) => {
        // denote loading
        dispatch(nomViewIsLoading(true));

        const request = apiGetInbox();
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
    return (dispatch) => {
        // denote loading
        dispatch(nomViewIsLoading(true));

        const request = apiGetPinned();
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
    return (dispatch) => {
        const request = apiGetNoms(query);

        request.then(response => {
            dispatch(updateNomStore(response.data.data));
        }).catch(error => {
            console.log(error);
        });
    };
}