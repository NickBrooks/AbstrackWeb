import React from 'react';

const SearchBar = React.createClass({
    render() {
        const { settings } = this.props;
        return (
            <div className="input-group">
                <input id="search-bar" type="text" className="form-control" placeholder={this.props.defaultValue} />
            </div>
        )
    }
})

export default SearchBar;
