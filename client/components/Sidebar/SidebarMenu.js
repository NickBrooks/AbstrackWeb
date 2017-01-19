import React from 'react';
import { Link } from 'react-router';

class SidebarMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    renderHeader(title, link) {
        return (
            <li>
                <Link to={link}>
                    <h6>{title}</h6>
                </Link>
            </li>)
    }

    renderChildren(title, link) {
        return (
            <li>
                <Link to={link}>{title}</Link>
            </li>
        )
    }

    render() {
        let {header, headerTo, links} = this.props;
        if (links == undefined) {
            return null;
        }

        return (
            <ul className="nav nav-sidebar">
                {header ? this.renderHeader(header, headerTo) : undefined}
                {links.map(
                    (link) => this.renderChildren(link.title, link.link))}
            </ul>
        )
    }
}

export default SidebarMenu;