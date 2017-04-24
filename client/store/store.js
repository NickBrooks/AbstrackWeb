import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import { loadLocalStorageState, saveLocalStorageState } from '../functions';

// import reducer
import rootReducer from './reducers';

// import data
import account from '../data/Account';
import comments from '../data/Comments';
import hashtags from '../data/Hashtags';
import login from '../data/Login';
import milestones from '../data/Milestones';
import tracks from '../data/Tracks';
import settings from '../data/Settings';
import ui from '../data/UI';
import users from '../data/Users';
import views from '../data/Views';

const persistedState = loadLocalStorageState();

// check for local storage login details
var loginToken;
if (typeof persistedState !== "undefined") {
  persistedState.login == null || persistedState.login.token != null ? loginToken = persistedState.login : loginToken = login;
} else {
  loginToken = login;
}

// create an object for the default state
const defaultState = {
  account,
  comments,
  hashtags,
  login: loginToken,
  milestones,
  noms: [],
  tracks,
  settings,
  ui,
  users,
  views
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(browserHistory))
  )
);

store.subscribe(throttle(() => {
  saveLocalStorageState({
    login: store.getState().login
  });
}, 1000));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
