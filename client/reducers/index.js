import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//reducers
import comments from './comments';
import hashtags from './hashtags';
import milestones from './milestones';
import noms from './noms';
import projects from './projects';
import settings from './settings';
import ui from './ui';
import userProfile from './userProfile';
import users from './users';
import views from './views';

const rootReducer = combineReducers({
    comments,
    hashtags,
    milestones,
    noms,
    projects,
    settings,
    ui,
    userProfile,
    users,
    views,
    routing: routerReducer
});

export default rootReducer;
