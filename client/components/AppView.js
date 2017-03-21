import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import NewNomButton from './NewNomButton/NewNomButton';
import NewNomModal from './NomEditor/NomEditor';

class AppView extends React.Component {
    constructor(props) {
        super(props);
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
