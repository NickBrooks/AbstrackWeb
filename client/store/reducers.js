import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//reducers
import comments from './Comment/reducer';
import hashtags from './Hashtag/reducer';
import milestones from './Milestone/reducer';
import login from './Login/reducer';
import noms from './Nom/reducer';
import nomViews from './NomView/reducer';
import tracks from './Track/reducer';
import settings from './Settings/reducer';
import ui from './UI/reducer';
import account from './Account/reducer';
import users from './User/reducer';
import views from './View/reducer';

const rootReducer = combineReducers({
    comments,
    hashtags,
    milestones,
    login,
    noms,
    nomViews,
    tracks,
    settings,
    ui,
    account,
    users,
    views,
    routing: routerReducer
});

export default rootReducer;