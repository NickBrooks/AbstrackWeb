import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// import dummydata
import Comments from './dummydata/Comments';
import Hashtags from './dummydata/Hashtags';
import Milestones from './dummydata/Milestones';
import Noms from './dummydata/Noms';
import Projects from './dummydata/Projects';
import Settings from './dummydata/Settings';
import UI from './dummydata/UI';
import UserProfile from './dummydata/UserProfile';
import Users from './dummydata/Users';

// create an object for the default state
const defaultState = {
  Comments,
  Hashtags,
  Milestones,
  Noms,
  Projects,
  Settings,
  UI,
  UserProfile,
  Users
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store
