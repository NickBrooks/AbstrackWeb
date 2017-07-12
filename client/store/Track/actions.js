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
        trackId
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
        return new Promise((resolve, reject) => {
            const request = apiGetTracks();

            request.then(response => {
                dispatch(updateTrackStore(response.data.data));
                resolve();
            }).catch(error => {
                console.log(error);
                reject();
            });
        });
    };
}

export function handleGetTrack(trackId) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(updateTrackFetchingStatus(true));
            const request = apiGetTrack(trackId);

            request.then(response => {
                dispatch(updateTrackFetchingStatus(false));
                dispatch(updateTrackStore([response.data]));
                resolve();
            }).catch(error => {
                dispatch(updateTrackFetchingStatus(false));
                console.log(error);
                reject();
            });
        });
    };
}

export function handleAddTrack(track) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(addTrackUpdateStatus("updating"));
            const request = apiAddTrack(track);

            request.then(response => {
                dispatch(updateTrackStore([response.data]));
                dispatch(addTrackUpdateStatus(false));
                dispatch(push('/t/' + response.data.id));
                resolve();
            }).catch(error => {
                dispatch(addTrackUpdateStatus(false));
                //TODO: handle error
                console.log(error);
                reject();
            });
        });
    };
}

export function handleUpdateTrack(trackId, track) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(addTrackUpdateStatus("updating"));
            const request = apiUpdateTrack(trackId, track);

            request.then(response => {
                dispatch(updateTrack(response.data));
                dispatch(addTrackUpdateStatus(false));
                dispatch(push('/t/' + trackId));
                resolve();
            }).catch(error => {
                dispatch(addTrackUpdateStatus(false));
                //TODO: handle error
                console.log(error);
                reject();
            });
        });
    };
}

export function handleDeleteTrack(trackId) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            dispatch(addTrackUpdateStatus("updating"));
            const request = apiDeleteTrack(trackId);

            request.then(response => {
                dispatch(deleteTrack(trackId));
                dispatch(addTrackUpdateStatus(false));
                dispatch(push('/tracks'));
                resolve();
            }).catch(error => {
                dispatch(addTrackUpdateStatus(false));
                //TODO: handle error
                console.log(error);
                reject();
            });
        });
    };
}