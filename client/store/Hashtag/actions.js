import { apiGetHashtags } from '../../api';

// update the results in lazy search
export function updateHashtagsStore(data) {
    return {
        type: 'UPDATE_HASHTAGS_STORE',
        data
    }
}

export function handleUpdateHashtagsStore() {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const request = apiGetHashtags();

            request.then(response => {
                dispatch(updateHashtagsStore(response.data));
                resolve();
            }).catch(error => {
                console.log(error);
                reject();
            });
        });
    };
}