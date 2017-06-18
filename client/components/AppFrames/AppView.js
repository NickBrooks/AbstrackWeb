import React from 'react';
import { browserHistory } from 'react-router';
import moment from 'moment';
import Sidebar from '../Sidebar/Sidebar';
import LoadingScreen from '../LoadingScreen';
import SearchBar from '../../store/Search/SearchBar';
import NewNoteButton from '../NewNoteButton/NewNoteButton';
import { loadLocalStorage } from '../../functions';

class AppView extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleSidebar = this.handleToggleSidebar.bind(this);

        this.checkValidToken();
    }

    checkValidToken() {
        const auth = loadLocalStorage('auth');

        if (auth == null || auth.token == "" || auth.token == null || auth.expiration < moment.utc().format()) {
            browserHistory.push('/login');
        }
    }

    handleToggleSidebar() {
        let { toggleSidebar, ui } = this.props;

        ui.sidebar.open ? toggleSidebar(false) : toggleSidebar(true);
    }

    newNoteShortcut() {
        browserHistory.push('/new/note');
    }

    componentWillMount() {
        this.props.handleGetAccount();
        this.props.handleGetTracks();
    }

    componentWillReceiveProps(nextProps) {
        let { location, toggleSidebar, ui } = this.props;

        // token check
        this.checkValidToken();

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

        Mousetrap.bind(['/'], function () {
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

        Mousetrap.unbind(['/'], function () {
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
                        <div className="col-sm-12 header">
                            <SearchBar {...this.props} />
                        </div>
                        <div className="col-sm-12 body">
                            <div className={ui.appView.displayChildren ? undefined : "invisible"}>
                                {React.cloneElement(this.props.children, this.props)}
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.ui.newNoteButton.show ? (<NewNoteButton {...this.props} />) : null}
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
