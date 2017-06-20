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

        this.state = {
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

    // selects the right icon, adds a description if none
    prepareOption(option) {
        switch (option.type) {
            case 'note':
                option.searchText = !!option.searchText ? option.searchText : "Empty note";
                option.icon = (
                    <span className="fa-stack note-header-blue">
                        <FontAwesome name="circle" stack="2x" />
                        <FontAwesome name="file-text-o" inverse stack="1x" />
                    </span>
                );
                return option;
            case 'track':
                option.searchText = !!option.searchText ? option.searchText : "Empty note";
                option.icon = (
                    <span className="fa-stack note-green-light">
                        <FontAwesome name="circle" stack="2x" />
                        <FontAwesome name="file-text-o" inverse stack="1x" />
                    </span>
                );
                return option;
            case 'searchHistory':
                option.searchText = !!option.searchText ? option.searchText : "Previous search";
                option.icon = (
                        <FontAwesome name="history" className="note-gray-active" />
                );
                return option;

            default:
                return option;
        }
    }

    displayOption(option) {
        this.prepareOption(option);

        return (
            <div className="search-result">
                <div className="icon">
                    {option.icon}
                </div>
                <p className="display">{option.display}</p>
                <p className="description"><small><em>{option.searchText}</em></small></p>
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
