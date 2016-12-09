import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

const SidebarSubMenu = React.createClass({
    renderMenuItem(menuItem, i) {
        <li><Link to={menuItem.link}>{menuItem.text}</Link></li>
    },
    render() {
        return (
            <ul className="nav nav-sidebar sub-menu">
                <li>
                    <h5><FontAwesome name={this.props.icon} /> {this.props.title}</h5>
                </li>
                {this.props.menuItems.map(this.renderMenuItem)}
            </ul>
        )
    }
})

export default SidebarSubMenu;
