import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { loadLocalStorageState, saveLocalStorageState } from '../functions';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import data
import accountData from '../data/Account';
import commentsData from '../data/Comments';
import hashtagsData from '../data/Hashtags';
import loginData from '../data/Login';
import settingsData from '../data/Settings';
import uiData from '../data/UI';
import usersData from '../data/Users';
import viewsData from '../data/Views';

// create an object for the default state
const defaultState = {
  account: accountData,
  comments: commentsData,
  hashtags: hashtagsData,
  login: loginData,
  nomEditor: null,
  noms: [],
  tracks: [],
  settings: settingsData,
  ui: uiData,
  users: usersData,
  views: viewsData
};

//reducers
import comments from './Comment/reducer';
import hashtags from './Hashtag/reducer';
import login from './Login/reducer';
import nomEditor from './NomEditor/reducer';
import noms from './Nom/reducer';
import nomViews from './NomView/reducer';
import tracks from './Track/reducer';
import settings from './Settings/reducer';
import ui from './UI/reducer';
import account from './Account/reducer';
import users from './User/reducer';
import views from './View/reducer';

const appReducer = combineReducers({
  comments,
  hashtags,
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

const rootReducer = (state, action) => {
  if (action.type === 'PURGE_STORE') {
    state = defaultState
  }

  return appReducer(state, action);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(browserHistory))
  )
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
