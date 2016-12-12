import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

const SidebarSubMenu = React.createClass({
    conformArray() {
        const { menuItems, textKey, linkKey } = this.props;

        var i;
        for (i = 0; i < menuItems.length; i++) {
            menuItems[i].text = menuItems[i][textKey]
            menuItems[i].link = menuItems[i][linkKey]
            delete menuItems[i].textKey;
            delete menuItems[i].linkKey;
        }
        console.log(menuItems);
        return menuItems;
    },
    renderMenuItem(menuItem, i) {
        return (
            <li key={i}><Link to={menuItem.link}>{menuItem.text}</Link></li>
        )
    },
    render() {
        return (
            <ul className="nav sub-menu">
                <li>
                    <h6><FontAwesome name={this.props.icon} /> {this.props.title}</h6>
                </li>
                {this.conformArray().map(this.renderMenuItem)}
            </ul>
        )
    }
})

export default SidebarSubMenu;
