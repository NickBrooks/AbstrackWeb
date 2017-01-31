import moment from 'moment';
import { guid } from '../../functions/functions';

function extractHashtags(state, nomId) {
    var i = state.findIndex((nom) => nom.id === nomId);
    var nom = state[i];

    if (nom == undefined) {
        return undefined;
    }

    return [...nom.hashtags];
}

function noms(state = [], action) {
    switch (action.type) {
        case 'ADD_NOM':
            action.nom.id = guid();
            action.nom.created_time = moment.utc().format();
            
            return [...state, action.nom];
        case 'PIN_NOM':
            return state.map(nom => nom.id === action.nomId ?
                // update the nom with a matching id
                { ...nom, pinned: action.value } :
                // otherwise return original nom
                nom
            );
        case 'ADD_HASHTAG_TO_NOM':
            var hashtags = extractHashtags(state, action.nomId);

            for (let hashtag of action.hashtags) {
                hashtags.push(hashtag);
            }

            return state.map(nom => nom.id === action.nomId ?
                // update the nom with a matching id
                { ...nom, hashtags: hashtags } :
                // otherwise return original nom
                nom
            );
        case 'REMOVE_HASHTAGS_FROM_NOM':
            var hashtags = extractHashtags(state, action.nomId);

            if (hashtags == undefined) {
                return state;
            }

            for (let hashtag of action.hashtags) {
                var i = hashtags.indexOf(hashtag);

                if (i > -1) {
                    hashtags.splice(i, 1);
                }
            };

            return state.map(nom => nom.id === action.nomId ?
                // update the nom with a matching id
                { ...nom, hashtags: hashtags } :
                // otherwise return original nom
                nom
            );
    }
    return state;
}

export default noms;
