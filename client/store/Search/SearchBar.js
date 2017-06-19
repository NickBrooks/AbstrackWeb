import React from 'react';
import FontAwesome from 'react-fontawesome';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.selectSearchResult = this.selectSearchResult.bind(this);
        this.displayOption = this.displayOption.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    getInitialState() {
        return {
            options: []
        };
    }

    selectSearchResult(result) {
        console.log(result);
    }

    handleSearch(query) {
        let { search } = this.props;
        console.log(query);

        this.setState({ options: search });
    }

    displayOption(option) {
        return (
            <div>
                <p>{option.display}</p>
                <p><small>{option.searchText}</small></p>
            </div>
        );
    }

    render() {
        let { search, ui } = this.props;

        return (
            <div className="search-bar">
                <AsyncTypeahead
                    {...this.state}
                    labelKey="display"
                    onSearch={this.handleSearch}
                    placeholder={(ui.searchBar.defaultValue ? ui.searchBar.defaultValue : "Search notes")}
                    renderMenuItemChildren={this.displayOption}
                />
            </div>
        )
    }
}

export default SearchBar;
