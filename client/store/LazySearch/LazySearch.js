import React from 'react';
import FontAwesome from 'react-fontawesome';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { browserHistory } from 'react-router';

class LazySearch extends React.Component {
    constructor(props) {
        super(props);
        this.selectSearchResult = this.selectSearchResult.bind(this);
        this.displayOption = this.displayOption.bind(this);
        this.filterBy = this.filterBy.bind(this);
        this.onInputChange = this.onInputChange.bind(this);

        this.state = {
            options: this.props.lazySearch
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
            case 1000:
                return "/" + selected.objectId;
            default:
                return;
        }
    }

    onInputChange(i) {
        if (i.length == 0) {
            this.props.resetLazySearchResults();
        }
    }

    selectSearchResult(selected) {
        if (!!selected[0]) {
            var url = this.generateLinkUrl(selected[0]);
            browserHistory.push(url);
            setTimeout(() => this._typeahead.getInstance().blur(), 0);
            setTimeout(() => this._typeahead.getInstance().clear(), 0);
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
                    <img src="http://i.imgur.com/jZH7aqa.png" alt="note" />
                );
                return option;
            case 1:
                option.searchText = !!option.searchText ? option.searchText : "Empty track";
                option.icon = (
                    <img src="http://i.imgur.com/KyJNNGg.png" alt="track" />
                );
                return option;
            case 2:
                option.searchText = !!option.searchText ? option.searchText : "Previous search";
                option.icon = (
                    <img src="http://i.imgur.com/KyJNNGg.png" alt="search" />
                );
                return option;
            case 1000:
                option.searchText = !!option.searchText ? option.searchText : "Previous search";
                option.icon = (
                    <img src={"http://i.imgur.com/" + option.iconId + ".png"} alt="search" />
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

    componentDidMount() {
        let { _typeahead } = this;

        // add shift+? keyboard shortcut for quick searching
        Mousetrap.bind(['?'], function () {
            setTimeout(() => _typeahead.getInstance().focus(), 0);
            return false;
        });
    }

    render() {
        let { search, ui } = this.props;

        return (
            <div className="search-bar">
                <AsyncTypeahead
                    {...this.state}
                    ref={ref => this._typeahead = ref}
                    labelKey="title"
                    maxHeight={1024}
                    useCache={false}
                    className="search-input"
                    onChange={this.selectSearchResult}
                    onInputChange={this.onInputChange}
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

export default LazySearch;
