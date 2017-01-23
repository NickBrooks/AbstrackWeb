import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// import dummydata
import commentsData from './dummydata/Comments';
import hashtagsData from './dummydata/Hashtags';
import milestonesData from './dummydata/Milestones';
import nomsData from './dummydata/Noms';
import tracksData from './dummydata/Tracks';
import settingsData from './dummydata/Settings';
import uiData from './dummydata/UI';
import userProfileData from './dummydata/UserProfile';
import usersData from './dummydata/Users';
import viewsData from './dummydata/Views';

//import reducers
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
