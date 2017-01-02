import { applyMiddleware, createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';

// import the root reducer
import rootReducer from './reducers/index';

// import dummydata
import comments from './dummydata/Comments';
import hashtags from './dummydata/Hashtags';
import milestones from './dummydata/Milestones';
import noms from './dummydata/Noms';
import projects from './dummydata/Projects';
import settings from './dummydata/Settings';
import ui from './dummydata/UI';
import userProfile from './dummydata/UserProfile';
import users from './dummydata/Users';

// create an object for the default state
const defaultState = {
  comments,
  hashtags,
  milestones,
  noms,
  projects,
  settings,
  ui,
  userProfile,
  users
};

const logger = createLogger();
const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(logger)
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store
