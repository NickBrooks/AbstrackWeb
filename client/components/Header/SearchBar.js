import React from 'react';


//dummy data
import Settings from '../../dummydata/Settings';

const SearchBar = React.createClass({
    render() {
        return (
            <div className="input-group">
                <input id="search-bar" type="text" className="form-control" placeholder={Settings.searchbar.text} />
            </div>
        )
    }
})

export default SearchBar;
