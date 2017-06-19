import React from 'react';
import FontAwesome from 'react-fontawesome';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.selectSearchResult = this.selectSearchResult.bind(this);
        this.displayOption = this.displayOption.bind(this);
        this.filterBy = this.filterBy.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    getInitialState() {
        return {
            options: []
        };
    }

    selectSearchResult(result) {
        if (!!result[0]) {
            console.log(result[0].display);
        }
    }

    handleSearch(query) {
        let { search } = this.props;

        this.setState({ options: search });
    }

    filterBy(option) {
        return option.id != null;
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
                    maxHeight={1024}
                    className="search-input"
                    onChange={this.selectSearchResult}
                    minLength={0}
                    filterBy={this.filterBy}
                    onSearch={this.handleSearch}
                    placeholder={(ui.searchBar.defaultValue ? ui.searchBar.defaultValue : "Search notes")}
                    renderMenuItemChildren={this.displayOption}
                />
            </div>
        )
    }
}

export default SearchBar;
