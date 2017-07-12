import React from 'react';
import { render } from 'react-dom';

// Import CSS
import Style from './styles/App.scss';

// Import Components
import { App, FullScreen } from './store/App';
import Account from './store/Account/Account';
import DeleteTrack from './store/Track/DeleteTrack';
import EditTrack from './store/Track/EditTrack';
import ForgotPasswordView from './store/Login/ForgotPasswordView';
import LoginView from './store/Login/LoginView';
import NewTrack from './store/Track/NewTrack';
import Note from './store/Note/Note';
import NoteEditor from './store/NoteEditor/NoteEditor';
import NoteViewDrafts from './store/NoteView/Drafts';
import NoteViewInbox from './store/NoteView/Inbox';
import NoteViewPinned from './store/NoteView/Pinned';
import NoteViewTag from './store/NoteView/Tag';
import RegisterView from './store/Login/RegisterView';
import Track from './store/Track/Track';
import Tracks from './store/Track/Tracks';
import User from './store/User/User';

// Import Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store/store';

const router = (
    <Provider store={store}>
        <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
            <Route component={FullScreen}>
                <Route path="/login" component={LoginView} />
                <Route path="/register" component={RegisterView} />
                <Route path="/login/forgot-password" component={ForgotPasswordView} />
            </Route>
            <Route path="/" component={App}>
                <IndexRoute component={NoteViewInbox}></IndexRoute>
                <Route path="/account" component={Account} />
                <Route path="/pinned" component={NoteViewPinned}></Route>
                <Route path="/tracks" component={Tracks}></Route>
                <Route path="/t/:trackId" component={Track}></Route>
                <Route path="/t/:trackId/edit" component={EditTrack}></Route>
                <Route path="/t/:trackId/delete" component={DeleteTrack}></Route>
                <Route path="/new/track" component={NewTrack}></Route>
                <Route path="/n/:noteId" component={Note}></Route>
                <Route path="/new/note(/:draftId)(/:action)" component={NoteEditor}></Route>
                <Route path="/drafts" component={NoteViewDrafts}></Route>
                <Route path="/tag/:tags" component={NoteViewTag}></Route>
                <Route path="/u/:userId" component={User}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
