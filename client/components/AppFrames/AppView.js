import React from 'react';
import { browserHistory } from 'react-router';
import moment from 'moment';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import NewNomButton from '../NewNomButton/NewNomButton';
import NewNomModal from '../NomEditor/NomEditor';

class AppView extends React.Component {
    constructor(props) {
        super(props);
        let { login } = props;
        
        if (login.token == "" || login.token == null) {
            browserHistory.push('/login');
        }

        if (login.expiration < moment.utc().format()) {
            console.log('expired');
        }
    }

    render() {
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
}

export default AppView;
