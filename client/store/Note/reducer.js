import moment from 'moment';
import { guid } from '../../functions';

function extractHashtags(state, noteId) {
    var i = state.findIndex((note) => note.id === noteId);
    var note = state[i];

    if (note == undefined) {
        return undefined;
    }

    return [...note.hashtags];
}

function removeViewFromNoteStore(state, action) {
    var newState = state.slice();

    function removeView(value, view) {
        return value !== view;
    }

    // remove that entire view from notes
    newState.forEach(function (note) {
        note.views = note.views.filter(removeView.bind(null, action.view));
    })

    return newState;
}

function mergeCurrentStateAndFetchedNotes(state, action) {
    // return state if no notes
    if (action.data == null) return state;

    var newState = state.slice();

    function doesNoteExist(existingNote, returnedNote) {
        return existingNote.id === returnedNote.id;
    }

    // merge the boys in
    action.data.forEach(function (note) {
        var key = newState.findIndex(doesNoteExist.bind(null, note));

        if (key >= 0) {
            newState[key].data = note;
            newState[key].timeFetched = action.timeFetched;
            if (action.view != undefined) {
                newState[key].views.push(action.view);
            }
        } else {
            var views = [];
            if (action.view != undefined) {
                views.push(action.view);
            }

            newState.push({
                id: note.id,
                data: note,
                views,
                timeFetched: action.timeFetched
            })
        }
    })

    return newState;
}

function addRemoveViewFromNote(note, value, view) {
    var i = note.views.indexOf(view);

    if (value) {
        if (i == -1) {
            note.views.push(view);
        }
    } else {
        if (i > -1) {
            note.views.splice(i, 1);
        }
    }

    return note;
}

function notes(state = [], action) {
    switch (action.type) {
        case 'REMOVE_NOTE_FROM_STORE':
            var i = state.findIndex((note) => note.data.id === action.noteId);
            if (i >= 0) {
                state.splice(i, 1);
                return state;
            }
            return state;
        case 'REMOVE_VIEW_FROM_NOTE_STORE':
            return removeViewFromNoteStore(state, action);
        case 'UPDATE_NOTE_STORE':
            return mergeCurrentStateAndFetchedNotes(state, action);
        case 'ADD_REMOVE_VIEW_FROM_NOTE':
            return state.map(note => note.id === action.noteId ?
                // update the note with a matching id
                addRemoveViewFromNote(note, action.value, action.view) :
                // otherwise return original note
                note
            );
        case 'ADD_HASHTAG_TO_NOTE':
            var hashtags = extractHashtags(state, action.noteId);

            for (let hashtag of action.hashtags) {
                hashtags.push(hashtag);
            }

            return state.map(note => note.id === action.noteId ?
                // update the note with a matching id
                { ...note, hashtags: hashtags } :
                // otherwise return original note
                note
            );
        case 'REMOVE_HASHTAGS_FROM_NOTE':
            var hashtags = extractHashtags(state, action.noteId);

            if (hashtags == undefined) {
                return state;
            }

            for (let hashtag of action.hashtags) {
                var i = hashtags.indexOf(hashtag);

                if (i > -1) {
                    hashtags.splice(i, 1);
                }
            };

            return state.map(note => note.id === action.noteId ?
                // update the note with a matching id
                { ...note, hashtags: hashtags } :
                // otherwise return original note
                note
            );
    }
    return state;
}

export default notes;
