import React from 'react';
import { browserHistory } from 'react-router';
import moment from 'moment';
import { ToastContainer } from 'react-toastify';
import Sidebar from '../Sidebar/Sidebar';
import LoadingScreen from '../LoadingScreen';
import Header from '../Header/Header';
import NewNoteButton from '../NewNoteButton/NewNoteButton';
import { loadLocalStorage } from '../../functions';

class AppView extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
        let { handleGetAccount, handleGetPinned, handleGetTracks, ui } = this.props;
        const auth = loadLocalStorage('auth');

        // close sidebar
        if (ui.sidebar.open) {
            toggleSidebar(false);
        }

        this.props.handleRefreshTokenLogin(auth.refreshToken).then(() => {
            handleGetAccount();
            handleGetTracks();
            handleGetPinned("pinned")
        });
    }

    checkValidToken() {
        const auth = loadLocalStorage('auth');

        // check auth token exists
        if (!auth || !auth.token) {
            browserHistory.push('/login');
            return false;
        }

        // check auth token is valid
        if (auth.expiration > moment.utc().format()) {
            return true
        }

        // not valid, so lets check if there is a refreshToken
        if (!auth.refreshToken) {
            browserHistory.push('/login');
            return false;
        }

        // refreshToken exists, lets ge a new token
        this.props.handleRefreshTokenLogin(auth.refreshToken);
        return true;
    };

    handleToggleSidebar() {
        let { toggleSidebar, ui } = this.props;

        ui.sidebar.open ? toggleSidebar(false) : toggleSidebar(true);
    }

    newNoteShortcut() {
        browserHistory.push('/new/note');
    }

    componentWillReceiveProps(nextProps) {
        let { location, toggleSidebar, ui } = this.props;

        // token check
        if (!ui.login.isRefreshingToken) this.checkValidToken();

        // close sidebar on route change
        if (location != nextProps.location && ui.sidebar.open) {
            toggleSidebar(false);
        }
    }

    componentDidMount() {
        let { newNoteShortcut, handleToggleSidebar } = this;

        Mousetrap.bind(['ctrl+enter'], function () {
            newNoteShortcut();
            return false;
        });

        Mousetrap.bind(['ctrl+/'], function () {
            handleToggleSidebar();
            return false;
        });
    }

    componentWillUnmount() {
        let { newNoteShortcut, handleToggleSidebar } = this;

        Mousetrap.unbind(['ctrl+enter'], function () {
            newNoteShortcut();
            return false;
        });

        Mousetrap.unbind(['ctrl+/'], function () {
            handleToggleSidebar();
            return false;
        });
    }

    renderApp() {
        let { ui } = this.props;

        return (
            <div className="app">
                <Sidebar {...this.props} />
                <div className="container main">
                    <div className="row">
                        <Header {...this.props} />
                        <div className="col-sm-12 body">
                            <div className={ui.appView.displayChildren ? undefined : "invisible"}>
                                {React.cloneElement(this.props.children, this.props)}
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.ui.newNoteButton.show ? (<NewNoteButton {...this.props} />) : null}
                <ToastContainer position="bottom-left" hideProgressBar={true} autoClose={5000} />
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.account.userName === undefined ? <LoadingScreen /> : this.renderApp()}
            </div>
        )
    }
}

export default AppView;
