import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import throttle from 'lodash/throttle';
import { loadLocalStorageState, saveLocalStorageState } from '../functions';

// import reducer
import rootReducer from './reducers';

// import data
import comments from '../data/Comments';
import hashtags from '../data/Hashtags';
import login from '../data/Login';
import milestones from '../data/Milestones';
import noms from '../data/Noms';
import tracks from '../data/Tracks';
import settings from '../data/Settings';
import ui from '../data/UI';
import userProfile from '../data/UserProfile';
import users from '../data/Users';
import views from '../data/Views';

const persistedState = loadLocalStorageState();
const logger = createLogger();

// check for local storage login details
var loginToken;
if (typeof persistedState !== "undefined") {
  persistedState.login.token != null ? loginToken = persistedState.login : loginToken = login;
} else {
  loginToken = login;
}

// create an object for the default state
const defaultState = {
  comments,
  hashtags,
  login: loginToken,
  milestones,
  noms,
  tracks,
  settings,
  ui,
  userProfile,
  users,
  views
};

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(thunk, logger, routerMiddleware(browserHistory))
);

store.subscribe(throttle(() => {
  saveLocalStorageState({
    login: store.getState().login
  });
}, 1000));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
