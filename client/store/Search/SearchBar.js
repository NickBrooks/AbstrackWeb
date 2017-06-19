import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Typeahead } from 'react-typeahead';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.selectSearchResult = this.selectSearchResult.bind(this);
        this.displayOption = this.displayOption.bind(this);
    }

    selectSearchResult(result) {
        console.log(result);
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
                <Typeahead ref="searchBar"
                    options={search}
                    filterOption="searchText"
                    displayOption={this.displayOption}
                    placeholder={(ui.searchBar.defaultValue ? ui.searchBar.defaultValue : "Search notes")}
                    onOptionSelected={this.selectSearchResult}
                    customClasses={{
                        input: "form-control search-input"
                    }}
                    maxVisible={5}
                    tabIndex={2}
                    showOptionsWhenEmpty={true}
                />
            </div>
        )
    }
}

export default SearchBar;
