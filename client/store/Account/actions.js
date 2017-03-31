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

function updateUpdateStatus(value) {
    return {
        type: 'UPDATE_UPDATE_STATUS',
        value
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

        dispatch(updateUpdateStatus("updating"));

        request.then(response => {
            dispatch(updatePasswordSuccess());
            dispatch(updatePasswordErrorMsg(false));
            dispatch(updateUpdateStatus("saved"));
            setTimeout(() => {
                dispatch(updateUpdateStatus(false))
            }, 3000)
        }).catch(error => {
            dispatch(updatePasswordErrorMsg("Something went wrong, current password probably invalid"));
        });
    };
}