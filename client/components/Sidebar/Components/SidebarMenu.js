import React from 'react';
import { Link } from 'react-router';

class SidebarMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    renderHeader(title, link) {
        return (
            <li className="nav-sidebar-header">
                <Link to={link}><span>{title}</span></Link>
            </li>)
    }

    render() {
        let {header, headerTo, links} = this.props;
        if (links == undefined) {
            return null;
        }

        return (
            <ul className="nav nav-sidebar text-truncate">
                {header ? this.renderHeader(header, headerTo) : undefined}
                {links.map(
                (link) => (<li key={link.link}><Link to={link.link}>{link.title}</Link></li>))}
            </ul>
        )
    }
}

export default SidebarMenu;