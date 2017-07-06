function mergeCurrentStateAndFetchedTracks(state, action) {
    // return state if no tracks
    if (action.data == null) return state;

    var newState = state.slice();

    function doesTrackExist(existingTrack, returnedTrack) {
        return existingTrack.id === returnedTrack.id;
    }

    // merge the boys in
    action.data.forEach(function (track) {
        var key = newState.findIndex(doesTrackExist.bind(null, track));

        if (key >= 0) {
            newState[key].data = track;
            newState[key].timeFetched = action.timeFetched;
        } else {
            newState.push({
                id: track.id,
                data: track,
                timeFetched: action.timeFetched
            })
        }
    })

    return newState;
}

function tracks(state = [], action) {
    switch (action.type) {
        case 'UPDATE_TRACK_STORE':
            return mergeCurrentStateAndFetchedTracks(state, action);
        case 'UPDATE_TRACK':
            return state.map(track => track.id === action.track.id ?
                // replace the track that matches
                action.track :
                // otherwise return track
                track
            );
        case 'DELETE_TRACK':
            return state.map(track => track.id === action.trackId ?
                // replace the track that matches
                undefined :
                // otherwise return track
                track
            );
    }
    return state;
}

export default tracks;
