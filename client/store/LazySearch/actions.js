import { apiGetLazySearchResults } from '../../api';
import lazySearchResults from '../../data/LazySearch';

// update the results in lazy search
export function updateLazySearchResults(results) {
    return {
        type: 'UPDATE_LAZY_SEARCH_RESULTS',
        results
    }
}

// reset lazysearch
export function resetLazySearchResults() {    
    return (dispatch) => {
        dispatch(updateLazySearchResults(lazySearchResults));
    };
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