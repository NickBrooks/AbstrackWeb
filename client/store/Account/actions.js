import { apiGetAccount, apiUpdatePassword } from '../../api';

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

function updatePasswordSuccess(data) {
    return {
        type: 'UPDATE_PASSWORD_SUCCESS',
        data
    }
}

function updatePasswordErrorMsg(message) {
    return {
        type: 'UPDATE_PASSWORD_ERROR_MSG',
        message
    }
}

export function handleGetAccount() {  
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

export function handleUpdatePassword(currentPassword, newPassword) {  
    return (dispatch, getState) => {
        const { token } = getState().login;
        const request = apiUpdatePassword(currentPassword, newPassword, token);

        request.then(response => {
            dispatch(updatePasswordErrorMsg(false));
            dispatch(updatePasswordSuccess());
        }).catch(error => {
            dispatch(updatePasswordErrorMsg("Something went wrong, current password probably invalid"));
        });
    };
}