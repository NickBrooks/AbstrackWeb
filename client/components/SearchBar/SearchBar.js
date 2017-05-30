import React from 'react';
import FontAwesome from 'react-fontawesome';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    openSidebar() {
        this.props.toggleSidebar(true);
    }

    render() {
        const { searchBar } = this.props.ui;

        return (
            <div className={"header " + (searchBar.class ? searchBar.class : "searchBar-inbox")}>
                <div className="row">
                    <div className="col-sm-12 input-group">
                        <button className="btn btn-link white" type="button" onClick={this.openSidebar.bind(this)}>
                            <FontAwesome name="bars" />
                        </button>
                        <input id="search-bar" type="text" className="form-control" placeholder={(searchBar.defaultValue ? searchBar.defaultValue : "Search noms")} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
