import { apiGetTracks, apiGetTrack, apiAddTrack, apiUpdateTrack, apiDeleteTrack } from '../../api';
import { push } from 'react-router-redux';
import moment from 'moment';

// update the list of notes
export function updateTrackStore(data) {
    return {
        type: 'UPDATE_TRACK_STORE',
        data,
        timeFetched: moment.utc().format()
    }
}

export function updateTrack(data) {
    return {
        type: 'UPDATE_TRACK',
        data,
        timeFetched: moment.utc().format()
    }
}

export function deleteTrack(trackId) {
    return {
        type: 'DELETE_TRACK',
        track
    }
}

export function addTrackUpdateStatus(value) {
    return {
        type: 'ADD_TRACK_UPDATE_STATUS',
        value
    }
}

export function updateTrackFetchingStatus(value) {
    return {
        type: 'UPDATE_TRACK_FETCHING_STATUS',
        value
    }
}

export function handleGetTracks() {
    return (dispatch) => {
        const request = apiGetTracks();

        request.then(response => {
            dispatch(updateTrackStore(response.data.data));
        }).catch(error => {
            console.log(error);
        });
    };
}

export function handleGetTrack(trackId) {
    return (dispatch) => {
        dispatch(updateTrackFetchingStatus(true));
        const request = apiGetTrack(trackId);

        request.then(response => {
            dispatch(updateTrackFetchingStatus(false));
            dispatch(updateTrackStore([response.data]));
        }).catch(error => {
            dispatch(updateTrackFetchingStatus(false));
            console.log(error);
        });
    };
}

export function handleAddTrack(track) {
    return (dispatch) => {
        dispatch(addTrackUpdateStatus("updating"));
        const request = apiAddTrack(track);

        request.then(response => {
            dispatch(updateTrackStore([response.data]));
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

export function handleDeleteTrack(trackId) {
    return (dispatch) => {
        dispatch(addTrackUpdateStatus("updating"));
        const request = apiDeleteTrack(trackId);

        request.then(response => {
            dispatch(deleteTrack(trackId));
            dispatch(addTrackUpdateStatus(false));
            dispatch(push('/tracks'));
        }).catch(error => {
            dispatch(addTrackUpdateStatus(false));
            //TODO: handle error
            console.log(error);
        });
    };
}