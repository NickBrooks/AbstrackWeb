import React from 'react';
import FontAwesome from 'react-fontawesome';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { browserHistory } from 'react-router';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.selectSearchResult = this.selectSearchResult.bind(this);
        this.displayOption = this.displayOption.bind(this);
        this.filterBy = this.filterBy.bind(this);

        this.state = {
            options: []
        };
    }

    generateLinkUrl(selected) {
        switch (selected.type) {
            case 0:
                return "/n/" + selected.objectId;
            case 1:
                return "/t/" + selected.objectId;
            case 2:
                return "/s/" + selected.title;
            default:
                return;
        }
    }

    selectSearchResult(selected) {
        if (!!selected[0]) {
            var url = this.generateLinkUrl(selected[0]);
            browserHistory.push(url);
        }
    }

    filterBy(option) {
        return option;
    }

    // selects the right icon, adds a description if none
    prepareOption(option) {
        switch (option.type) {
            case 0:
                option.searchText = !!option.searchText ? option.searchText : "Empty note";
                option.icon = (
                    <span className="fa-stack note-header-blue">
                        <FontAwesome name="circle" stack="2x" />
                        <FontAwesome name="file-text-o" inverse stack="1x" />
                    </span>
                );
                return option;
            case 1:
                option.searchText = !!option.searchText ? option.searchText : "Empty track";
                option.icon = (
                    <span className="fa-stack note-green-light">
                        <FontAwesome name="circle" stack="2x" />
                        <FontAwesome name="file-text-o" inverse stack="1x" />
                    </span>
                );
                return option;
            case 2:
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
            <div className="search-result text-truncate">
                <div className="icon">
                    {option.icon}
                </div>
                <p className="display">{option.title}</p>
                <p className="description"><small><em>{option.description}...</em></small></p>
            </div>
        );
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.lazySearch != nextProps.lazySearch) {
            this.setState({
                options: nextProps.lazySearch
            });
        }
    }

    render() {
        let { search, ui } = this.props;

        return (
            <div className="search-bar">
                <AsyncTypeahead
                    {...this.state}
                    labelKey="title"
                    maxHeight={1024}
                    className="search-input"
                    onChange={this.selectSearchResult}
                    minLength={0}
                    filterBy={this.filterBy}
                    onSearch={this.props.handleLazySearchQuery}
                    placeholder={(ui.searchBar.defaultValue ? ui.searchBar.defaultValue : "Search notes")}
                    renderMenuItemChildren={this.displayOption}
                />
            </div>
        )
    }
}

export default SearchBar;
