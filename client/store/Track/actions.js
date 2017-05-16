import { apiGetTracks, apiAddTrack } from '../../api';

function setTracks(data) {
    return {
        type: 'SET_TRACKS',
        data
    }
}

function addTrack(track) {
    return {
        type: 'ADD_TRACK',
        track
    }
}

function addTrackUpdateStatus(value) {
    return {
        type: 'ADD_TRACK_UPDATE_STATUS',
        value
    }
}

export function handleGetTracks() {
    return (dispatch) => {
        const request = apiGetTracks();

        request.then(response => {
            dispatch(setTracks(response.data.data));
        }).catch(error => {
            console.log(error);
        });
    };
}

export function handleAddTrack(track) {
    return (dispatch) => {
        dispatch(addTrackUpdateStatus(true));
        const request = apiAddTrack(track);

        request.then(response => {
            dispatch(addTrack(response.data));
            dispatch(addTrackUpdateStatus(false));
        }).catch(error => {
            dispatch(addTrackUpdateStatus(false));
            //TODO: handle error
            console.log(error);
        });
    };
}