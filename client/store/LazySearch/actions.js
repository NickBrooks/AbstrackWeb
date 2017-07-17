import { apiGetLazySearchResults } from '../../api';
import lazySearchResults from '../../data/LazySearch';

// update the results in lazy search
export function updateLazySearchResults(data) {
    return {
        type: 'UPDATE_LAZY_SEARCH_RESULTS',
        data
    }
}

// reset lazysearch
export function resetLazySearchResults() {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(updateLazySearchResults(lazySearchResults));
            resolve();
        });
    };
}

export function handleLazySearchQuery(q) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const request = apiGetLazySearchResults(q);

            request.then(response => {
                dispatch(updateLazySearchResults(response.data));
                resolve();
            }).catch(error => {
                console.log(error);
                reject();
            });
        });
    };
}