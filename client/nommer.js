import React from 'react';
import { render } from 'react-dom';

// Import CSS
import Style from './styles/nommer.scss';

// Import Components
import { App, FullScreen } from './store/App';
import NomViewInbox from './store/NomView/Inbox';
import NomViewPinned from './store/NomView/Pinned';
import NomViewTrack from './store/NomView/Track';
import NomViewTag from './store/NomView/Tag';
import Nom from './store/Nom/Nom';
import LoginView from './store/Login/LoginView';
import RegisterView from './store/Login/RegisterView';
import ForgotPasswordView from './store/Login/ForgotPasswordView';
import User from './store/User/User';
import Account from './store/Account/Account';

// Import Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store/store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route component={FullScreen}>
                <Route path="/login" component={LoginView} />
                <Route path="/register" component={RegisterView} />
                <Route path="/login/forgot-password" component={ForgotPasswordView} />
            </Route>
            <Route path="/" component={App}>
                <IndexRoute component={NomViewInbox}></IndexRoute>
                <Route path="/account" component={Account} />
                <Route path="/pinned" component={NomViewPinned}></Route>
                <Route path="/t/:trackId" component={NomViewTrack}></Route>
                <Route path="/n/:nomId" component={Nom}></Route>
                <Route path="/tag/:tags" component={NomViewTag}></Route>
                <Route path="/u/:userId" component={User}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
