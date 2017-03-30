import { apiGetAccount } from '../../api';

function getAccountSuccess(data) {
    return {
        type: 'GET_ACCOUNT_SUCCESS',
        data
    }
}

function getAccountFailure(data) {
    return {
        type: 'GET_ACCOUNT_FAILURE',
        data
    }
}

export function getAccount() {  
    return (dispatch, getState) => {
        const { token } = getState().login;
        const request = apiGetAccount(token);

        request.then(response => {
            dispatch(getAccountSuccess(response.data));
        }).catch(error => {
            dispatch(getAccountFailure());
        });
    };
}