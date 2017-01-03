import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import NewNomButton from './General/NewNomButton';
import NewNomModal from './General/NewNomModal/NewNomModal';

const Main = React.createClass({
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
})

export default Main;
