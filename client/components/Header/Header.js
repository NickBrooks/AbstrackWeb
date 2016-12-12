import React from 'react';
import SearchBar from './SearchBar';
import IconMenu from './IconMenu';

const Header = React.createClass({
    render() {
        return (
            <div className="header">
                <div className="row">
                    <div className="col-sm-9">
                        <SearchBar />
                    </div>
                    <div className="col-sm-3">
                        <IconMenu />
                    </div>
                </div>
            </div>
        )
    }
})

export default Header;
