import React from 'react';
import SearchBar from './SearchBar';

const Header = React.createClass({
    render() {
        return (
            <div className="header">
                <div className="row">
                    <div className="col-sm-12">
                        <SearchBar />
                    </div>
                </div>
            </div>
        )
    }
})

export default Header;
