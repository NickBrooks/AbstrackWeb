import { apiGetTracks } from '../../api';

function setTracks(data) {
    return {
        type: 'SET_TRACKS',
        data
    }
}

export function handleGetTracks() {
    return (dispatch) => {
        const getTracks = apiGetTracks();

        getTracks.then(response => {
            dispatch(setTracks(response.data.data));
        }).catch(error => {
            console.log(error);
        });
    };
}