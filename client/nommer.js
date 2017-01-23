import React from 'react';
import { render } from 'react-dom';

// Import CSS
import Style from './app.scss';

// Import Components
import App from './components/App';
import NomViewInbox from './store/NomView/Inbox';
import NomViewPinned from './store/NomView/Pinned';
import NomViewTrack from './store/NomView/Track';
import NomViewMilestone from './store/NomView/Milestone';
import NomViewTag from './store/NomView/Tag';
import Nom from './store/Nom/Nom';
import UserProfile from './store/UserProfile/UserProfile';

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
