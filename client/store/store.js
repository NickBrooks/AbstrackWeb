import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import { loadLocalStorageState, saveLocalStorageState } from '../functions';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import data
import loginData from '../data/Login';
import noteEditorData from '../data/NoteEditor';
import lazySearchData from '../data/LazySearch';
import settingsData from '../data/Settings';
import uiData from '../data/UI';

// create an object for the default state
const defaultState = {
  account: {},
  comments: [],
  hashtags: [],
  login: loginData,
  noteEditor: noteEditorData,
  notes: [],
  tracks: [],
  lazySearch: lazySearchData,
  settings: settingsData,
  ui: uiData,
  users: [],
  views: []
};

//reducers
import comments from './Comment/reducer';
import hashtags from './Hashtag/reducer';
import login from './Login/reducer';
import noteEditor from './NoteEditor/reducer';
import notes from './Note/reducer';
import noteViews from './NoteView/reducer';
import tracks from './Track/reducer';
import settings from './Settings/reducer';
import lazySearch from './LazySearch/reducer';
import ui from './UI/reducer';
import account from './Account/reducer';
import users from './User/reducer';
import views from './View/reducer';

const appReducer = combineReducers({
  comments,
  hashtags,
  login,
  noteEditor,
  notes,
  noteViews,
  tracks,
  lazySearch,
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
