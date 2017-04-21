import { apiGetInbox, apiGetNoms } from '../../api';

export function nomViewIsLoading(value) {
    return {
        type: 'NOM_VIEW_IS_LOADING',
        value
    }
}

export function updateNomList(data) {
    return {
        type: 'UPDATE_NOM_LIST',
        data
    }
}

export function handleGetInbox() {
    return (dispatch, getState) => {
        // denote loading
        dispatch(nomViewIsLoading(true));

        const { token } = getState().login;
        const request = apiGetInbox(token);

        request.then(response => {
            dispatch(nomViewIsLoading(false));
            dispatch(updateNomList(response.data.data));
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
            dispatch(updateNomList(response.data.data));
        }).catch(error => {
            console.log(error);
        });
    };
}