import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Main = React.createClass({
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 main">
                        <Header />
                        {React.cloneElement(this.props.children, this.props)}
                    </div>
                </div>
            </div>
        )
    }
})

export default Main;