import React from 'react';
import FontAwesome from 'react-fontawesome';
import LazySearch from '../../store/LazySearch/LazySearch';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    openSidebar() {
        this.props.toggleSidebar(true);
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
                        <LazySearch {...this.props} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
