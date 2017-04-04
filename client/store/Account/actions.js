import { apiGetAccount, apiUpdatePassword, apiUpdateProfileDetails } from '../../api';

function setAccount(data) {
    return {
        type: 'SET_ACCOUNT',
        data
    }
}

function setAccountFailure(data) {
    return {
        type: 'SET_ACCOUNT_FAILURE',
        data
    }
}

function updatePasswordSuccess(data) {
    return {
        type: 'UPDATE_PASSWORD_SUCCESS',
        data
    }
}

function updatePasswordUpdateStatus(value) {
    return {
        type: 'UPDATE_PASSWORD_UPDATE_STATUS',
        value
    }
}

function updateProfileDetailsUpdateStatus(value) {
    return {
        type: 'UPDATE_PROFILE_DETAILS_UPDATE_STATUS',
        value
    }
}

function updateProfileDetailsErrorMsg(message) {
    return {
        type: 'UPDATE_PROFILE_DETAILS_ERROR_MSG',
        message
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
            dispatch(setAccount(response.data));
        }).catch(error => {
            dispatch(setAccountFailure());
        });
    };
}

export function handleUpdateProfileDetails(updatedDetails) {
    return (dispatch, getState) => {
        const { token } = getState().login;
        const request = apiUpdateProfileDetails(updatedDetails, token);

        dispatch(updateProfileDetailsUpdateStatus("updating"));

        request.then(response => {
            dispatch(setAccount(response.data));
            dispatch(updateProfileDetailsErrorMsg(false));
            dispatch(updateProfileDetailsUpdateStatus("saved"));
            setTimeout(() => {
                dispatch(updateProfileDetailsUpdateStatus(false))
            }, 3000)
        }).catch(error => {
            dispatch(updateProfileDetailsErrorMsg("Something went wrong, try again"));
        });
    };
}

export function handleUpdatePassword(currentPassword, newPassword) {
    return (dispatch, getState) => {
        const { token } = getState().login;
        const request = apiUpdatePassword(currentPassword, newPassword, token);

        dispatch(updatePasswordUpdateStatus("updating"));

        request.then(response => {
            dispatch(updatePasswordSuccess());
            dispatch(updatePasswordErrorMsg(false));
            dispatch(updatePasswordUpdateStatus("saved"));
            setTimeout(() => {
                dispatch(updatePasswordUpdateStatus(false))
            }, 3000)
        }).catch(error => {
            dispatch(updatePasswordErrorMsg("Something went wrong, current password probably invalid"));
        });
    };
}