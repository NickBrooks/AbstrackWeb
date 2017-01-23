import { applyMiddleware, createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// import reducer
import rootReducer from './reducers';

// import data
import comments from '../data/Comments';
import hashtags from '../data/Hashtags';
import milestones from '../data/Milestones';
import noms from '../data/Noms';
import tracks from '../data/Tracks';
import settings from '../data/Settings';
import ui from '../data/UI';
import userProfile from '../data/UserProfile';
import users from '../data/Users';
import views from '../data/Views';

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