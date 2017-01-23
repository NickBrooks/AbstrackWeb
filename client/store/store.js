import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// import data
import commentsData from '../data/Comments';
import hashtagsData from '../data/Hashtags';
import milestonesData from '../data/Milestones';
import nomsData from '../data/Noms';
import tracksData from '../data/Tracks';
import settingsData from '../data/Settings';
import uiData from '../data/UI';
import userProfileData from '../data/UserProfile';
import usersData from '../data/Users';
import viewsData from '../data/Views';

//import reducers
import comments from './Comment/reducer';
import hashtags from './Hashtag/reducer';
import milestones from './Milestone/reducer';
import noms from './Nom/reducer';
import tracks from './Track/reducer';
import settings from './Settings/reducer';
import ui from './UI/reducer';
import userProfile from './UserProfile/reducer';
import users from './User/reducer';
import views from './View/reducer';

//create the rootReducer
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

// create an object for the default state
const defaultState = {
  commentsData,
  hashtagsData,
  milestonesData,
  nomsData,
  tracksData,
  settingsData,
  uiData,
  userProfileData,
  usersData,
  viewsData
};

const logger = createLogger();
const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(thunk, logger)
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
