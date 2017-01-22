import { applyMiddleware, createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// import the root reducer
import rootReducer from './reducers';

// import dummydata
import comments from './dummydata/Comments';
import hashtags from './dummydata/Hashtags';
import milestones from './dummydata/Milestones';
import noms from './dummydata/Noms';
import tracks from './dummydata/Tracks';
import settings from './dummydata/Settings';
import ui from './dummydata/UI';
import userProfile from './dummydata/UserProfile';
import users from './dummydata/Users';
import views from './dummydata/Views';

// create an object for the default state
const defaultState = {
  comments,
  hashtags,
  milestones,
  noms,
  tracks,
  settings,
  ui,
  userProfile,
  users,
  views
};

const logger = createLogger();
const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(thunk, logger)
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
