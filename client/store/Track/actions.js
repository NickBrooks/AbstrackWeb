import { apiGetTracks, apiAddTrack, apiUpdateTrack } from '../../api';
import { push } from 'react-router-redux';

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

function updateTrack(track) {
    return {
        type: 'UPDATE_TRACK',
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
        dispatch(addTrackUpdateStatus("updating"));
        const request = apiAddTrack(track);

        request.then(response => {
            dispatch(addTrack(response.data));
            dispatch(addTrackUpdateStatus(false));
            dispatch(push('/t/' + response.data.id));
        }).catch(error => {
            dispatch(addTrackUpdateStatus(false));
            //TODO: handle error
            console.log(error);
        });
    };
}

export function handleUpdateTrack(trackId, track) {
    return (dispatch) => {
        dispatch(addTrackUpdateStatus("updating"));
        const request = apiUpdateTrack(trackId, track);

        request.then(response => {
            dispatch(updateTrack(response.data));
            dispatch(addTrackUpdateStatus(false));
            dispatch(push('/t/' + trackId));
        }).catch(error => {
            dispatch(addTrackUpdateStatus(false));
            //TODO: handle error
            console.log(error);
        });
    };
}