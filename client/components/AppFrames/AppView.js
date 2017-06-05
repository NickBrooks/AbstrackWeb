import React from 'react';
import { browserHistory } from 'react-router';
import moment from 'moment';
import Sidebar from '../Sidebar/Sidebar';
import LoadingScreen from '../LoadingScreen';
import SearchBar from '../SearchBar/SearchBar';
import NewNomButton from '../NewNomButton/NewNomButton';
import { loadLocalStorage } from '../../functions';

class AppView extends React.Component {
    constructor(props) {
        super(props);
        this.checkValidToken();
    }

    checkValidToken() {
        const auth = loadLocalStorage('auth');

        if (auth == null || auth.token == "" || auth.token == null || auth.expiration < moment.utc().format()) {
            browserHistory.push('/login');
        }
    }

    newNomShortcut() {
        browserHistory.push('/new/nom');
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
        let { newNomShortcut } = this;

        Mousetrap.bind(['ctrl+enter'], function () {
            newNomShortcut();
            return false;
        });
    }

    renderApp() {
        return (
            <div className="app">
                <Sidebar {...this.props} />
                <div className="container main">
                    <div className="row">
                        <div className="col-sm-12 header">
                            <SearchBar {...this.props} />
                        </div>
                        <div className="col-sm-12 body">
                            {React.cloneElement(this.props.children, this.props)}
                        </div>
                    </div>
                </div>
                {this.props.ui.newNomButton.show ? (<NewNomButton {...this.props} />) : null}
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
