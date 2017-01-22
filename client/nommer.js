import React from 'react';
import { render } from 'react-dom';

// Import CSS
import Style from './styles/app.scss';

// Import Components
import App from './components/App';
import NomViewInbox from './components/NomViews/Inbox';
import NomViewPinned from './components/NomViews/Pinned';
import NomViewTrack from './components/NomViews/Track';
import NomViewMilestone from './components/NomViews/Milestone';
import NomViewTag from './components/NomViews/Tag';
import Nom from './components/Nom/Nom';
import UserProfile from './components/UserProfile/UserProfile';

// Import Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={NomViewInbox}></IndexRoute>
                <Route path="/pinned" component={NomViewPinned}></Route>
                <Route path="/t/:trackId" component={NomViewTrack}></Route>
                <Route path="/m/:milestoneId" component={NomViewMilestone}></Route>
                <Route path="/n/:nomId" component={Nom}></Route>
                <Route path="/tag/:tag" component={NomViewTag}></Route>
                <Route path="/u/:userId" component={UserProfile}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
