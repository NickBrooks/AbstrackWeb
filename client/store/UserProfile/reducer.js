function userProfile(state = [], action) {
    switch (action.type) {
        case 'GET_USER_PROFILE_SUCCESS':
            return action.data;
    }
    return state;
}

export default userProfile;
