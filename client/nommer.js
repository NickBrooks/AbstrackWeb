import React from 'react';
import { render } from 'react-dom';

// Import CSS
import Style from './styles/App.scss';

// Import Components
import { App, FullScreen } from './store/App';
import NomViewInbox from './store/NomView/Inbox';
import NomViewPinned from './store/NomView/Pinned';
import Track from './store/Track/Track';
import NomViewTag from './store/NomView/Tag';
import Nom from './store/Nom/Nom';
import NewNom from './store/Nom/NewNom';
import LoginView from './store/Login/LoginView';
import RegisterView from './store/Login/RegisterView';
import ForgotPasswordView from './store/Login/ForgotPasswordView';
import User from './store/User/User';
import Account from './store/Account/Account';
import Tracks from './store/Track/Tracks';
import EditTrack from './store/Track/EditTrack';
import DeleteTrack from './store/Track/DeleteTrack';
import NewTrack from './store/Track/NewTrack';

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
                <Route path="/tracks" component={Tracks}></Route>
                <Route path="/t/:trackId" component={Track}></Route>
                <Route path="/t/:trackId/edit" component={EditTrack}></Route>
                <Route path="/t/:trackId/delete" component={DeleteTrack}></Route>
                <Route path="/new/track" component={NewTrack}></Route>
                <Route path="/n/:nomId" component={Nom}></Route>
                <Route path="/new/nom" component={NewNom}></Route>
                <Route path="/tag/:tags" component={NomViewTag}></Route>
                <Route path="/u/:userId" component={User}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
