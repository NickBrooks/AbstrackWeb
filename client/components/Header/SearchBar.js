import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { settings } = this.props;
        return (
            <div className="input-group">
                <input id="search-bar" type="text" className="form-control" placeholder={this.props.defaultValue} />
            </div>
        )
    }
}

export default SearchBar;
