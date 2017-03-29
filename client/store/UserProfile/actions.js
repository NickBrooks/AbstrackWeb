import { apiGetUserProfile } from '../../api';

function getUserProfileSuccess(data) {
    return {
        type: 'GET_USER_PROFILE_SUCCESS',
        data
    }
}

function getUserProfileFailure(data) {
    return {
        type: 'GET_USER_PROFILE_FAILURE',
        data
    }
}

export function getUserProfile() {  
    return (dispatch, getState) => {
        const { token } = getState.Login;
        const request = apiGetUserProfile(token);

        request.then(response => {
            dispatch(getUserProfileSuccess(response.data));
        }).catch(error => {
            dispatch(getUserProfileFailure());
        });
    };
}