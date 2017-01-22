import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//reducers
import comments from './store/Comment/reducer';
import hashtags from './store/Hashtag/reducer';
import milestones from './store/Milestone/reducer';
import noms from './store/Nom/reducer';
import tracks from './store/Track/reducer';
import settings from './store/Settings/reducer';
import ui from './store/UI/reducer';
import userProfile from './store/UserProfile/reducer';
import users from './store/User/reducer';
import views from './store/View/reducer';

const rootReducer = combineReducers({
    comments,
    hashtags,
    milestones,
    noms,
    tracks,
    settings,
    ui,
    userProfile,
    users,
    views,
    routing: routerReducer
});

export default rootReducer;
