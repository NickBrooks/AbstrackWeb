import React from 'react';

const SearchBar = React.createClass({
    render() {
        return (
            <div className="input-group">
                <input id="search-bar" type="text" className="form-control" placeholder="Search..." />
            </div>
        )
    }
})

export default SearchBar;