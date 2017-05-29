import { apiGetInbox, apiGetPinned, apiSearchNoms, apiGetDrafts } from '../../api';
import { updateNomStore, removeViewFromNomStore } from '../Nom/actions';
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

export function handleGetInbox(view) {
    return (dispatch) => {
        // denote loading
        dispatch(nomViewIsLoading(true));

        const request = apiGetInbox();

        request.then(response => {
            dispatch(updateNomViewList(view));
            dispatch(nomViewIsLoading(false));
            dispatch(removeViewFromNomStore(view));
            dispatch(updateNomStore(response.data.data, view));
        }).catch(error => {
            dispatch(nomViewIsLoading(false));
            console.log(error);
        });
    };
}

export function handleGetPinned(view) {
    return (dispatch) => {
        // denote loading
        dispatch(nomViewIsLoading(true));

        const request = apiGetPinned();

        request.then(response => {
            dispatch(updateNomViewList(view));
            dispatch(nomViewIsLoading(false));
            dispatch(removeViewFromNomStore(view));
            dispatch(updateNomStore(response.data.data, view));
        }).catch(error => {
            dispatch(nomViewIsLoading(false));
            console.log(error);
        });
    };
}

export function handleSearchNoms(view, query) {
    return (dispatch) => {
        // denote loading
        dispatch(nomViewIsLoading(true));
        const request = apiSearchNoms(query);

        request.then(response => {
            dispatch(updateNomViewList(view));
            dispatch(nomViewIsLoading(false));
            dispatch(removeViewFromNomStore(view));
            dispatch(updateNomStore(response.data.data, view));
        }).catch(error => {
            dispatch(nomViewIsLoading(false));
            console.log(error);
        });
    };
}

export function handleGetDrafts(view) {
    return (dispatch) => {
        // denote loading
        dispatch(nomViewIsLoading(true));

        const request = apiGetDrafts();

        request.then(response => {
            dispatch(updateNomViewList(view))
            dispatch(nomViewIsLoading(false));
            dispatch(removeViewFromNomStore(view));
            dispatch(updateNomStore(response.data.data, view));
        }).catch(error => {
            dispatch(nomViewIsLoading(false));
            console.log(error);
        });
    };
}