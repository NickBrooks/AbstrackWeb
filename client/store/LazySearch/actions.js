import { apiGetLazySearchResults } from '../../api';

// update the results in lazy search
export function updateLazySearchResults(results) {
    return {
        type: 'UPDATE_LAZY_SEARCH_RESULTS',
        results
    }
}

export function handleLazySearchQuery(q) {
    return (dispatch) => {
        const request = apiGetLazySearchResults(q);

        request.then(response => {
            dispatch(updateLazySearchResults(response.data));
        }).catch(error => {
            console.log(error);
        });
    };
}