import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import NewNomButton from './General/NewNomButton';
import NewNomModal from './General/NewNomModal/NewNomModal';

const Main = React.createClass({
    render() {
        return (
            <div className="app">
                <Sidebar />
                <div className="container-fluid main">
                    <div className="row">
                        <div className="col-sm-12 header">
                            <Header />
                        </div>
                        <div className="col-sm-12 body">
                            {React.cloneElement(this.props.children, this.props)}
                        </div>
                    </div>
                </div>
                <NewNomButton />
                <NewNomModal open={this.props.ui.newNomModal.open} />
            </div>
        )
    }
})

export default Main;
