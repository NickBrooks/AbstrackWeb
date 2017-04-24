import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { searchBar } = this.props.ui;

        return (
            <div className={"header " + (searchBar.class ? searchBar.class : "searchBar-inbox")}>
                <div className="row">
                    <div className="col-sm-12 input-group">
                        <input id="search-bar" type="text" className="form-control" placeholder={(searchBar.defaultValue ? searchBar.defaultValue : "Search noms")} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
