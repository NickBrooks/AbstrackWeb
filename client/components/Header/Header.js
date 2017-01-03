import React from 'react';
import SearchBar from './SearchBar';

const Header = React.createClass({
    render() {
        return (
            <div className="header">
                <div className="row">
                    <div className="col-sm-12">
                        <SearchBar defaultValue={this.props.settings.searchbar.text} />
                    </div>
                </div>
            </div>
        )
    }
})

export default Header;
