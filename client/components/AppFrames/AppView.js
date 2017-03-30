import React from 'react';
import { browserHistory } from 'react-router';
import moment from 'moment';
import Sidebar from '../Sidebar/Sidebar';
import LoadingScreen from '../LoadingScreen';
import Header from '../Header/Header';
import NewNomButton from '../NewNomButton/NewNomButton';
import NewNomModal from '../NomEditor/NomEditor';

class AppView extends React.Component {
    constructor(props) {
        super(props);
        this.checkValidToken = this.checkValidToken.bind(this);

        this.checkValidToken();
        this.props.getUserProfile();
    }

    checkValidToken() {
        let { login } = this.props;

        if (login == null || login.token == "" || login.token == null || login.expiration < moment.utc().format()) {
            browserHistory.push('/login');
        }
    }

    componentWillReceiveProps() {
        this.checkValidToken();
    }

    renderApp() {
        return (
            <div className="app">
                <Sidebar {...this.props} />
                <div className="container-fluid main">
                    <div className="row">
                        <div className="col-sm-12 header">
                            <Header {...this.props} />
                        </div>
                        <div className="col-sm-12 body">
                            {React.cloneElement(this.props.children, this.props)}
                        </div>
                    </div>
                </div>
                {this.props.ui.newNomModal.open ? null : (<NewNomButton {...this.props} />)}
                <NewNomModal open={this.props.ui.newNomModal.open} {...this.props} />
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.userProfile.userName === undefined ? <LoadingScreen /> : this.renderApp()}
            </div>
        )
    }
}

export default AppView;
