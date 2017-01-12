import moment from 'moment';
import { guid } from '../functions/functions';

function noms(state = [], action) {
    switch (action.type) {
        case 'ADD_NOM':
            action.nom.id = guid();
            action.nom.created_by = moment.utc().format();
            
            return [...state, action.nom];
    }
    return state;
}

export default noms;
