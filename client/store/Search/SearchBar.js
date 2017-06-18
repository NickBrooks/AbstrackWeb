import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Typeahead } from 'react-typeahead';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.selectSearchResult = this.selectSearchResult.bind(this);
        this.doSomethingOnFocus = this.doSomethingOnFocus.bind(this);
    }

    openSidebar() {
        this.props.toggleSidebar(true);
    }

    selectSearchResult(result) {
        console.log(result);
    }

    doSomethingOnFocus(e) {
        let { toggleAppViewChildren, ui } = this.props;

        toggleAppViewChildren(e.type == "focus" ? false : true);
    }

    render() {
        let { search, ui } = this.props;

        return (
            <div className={"header " + (ui.searchBar.class ? ui.searchBar.class : "searchBar-inbox")}>
                <div className="row">
                    <div className="col-sm-12 input-group">
                        <button className="btn btn-link sidebar-toggle" type="button" onClick={this.openSidebar.bind(this)}>
                            <FontAwesome name="bars" />
                        </button>
                        <Typeahead ref="searchBar"
                            options={search}
                            onFocus={this.doSomethingOnFocus}
                            onBlur={this.doSomethingOnFocus}
                            filterOption="searchText"
                            displayOption="display"
                            placeholder={(ui.searchBar.defaultValue ? ui.searchBar.defaultValue : "Search notes")}
                            onOptionSelected={this.selectSearchResult}
                            customClasses={{
                                input: "form-control search-input"
                            }}
                            maxVisible={5}
                            tabIndex={2}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
