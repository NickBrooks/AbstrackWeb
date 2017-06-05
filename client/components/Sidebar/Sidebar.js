import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Avatar from '../Avatar/Avatar';
import SidebarMenu from './Components/SidebarMenu';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    closeSidebar() {
        this.props.toggleSidebar(false);
    }

    logout(e) {
        e.preventDefault();
        this.props.handleLogout();
    }

    renderUserBadge() {
        let { account } = this.props;

        return (
            <div className="user-badge">
                <Link to="/account">
                    <Avatar user={account} size="25" customClass="pull-left" /> <span>{account.displayName}</span>
                </Link>
                <div className="clearfix"></div>
            </div>
        )
    }

    renderTracksMenu(tracks) {
        if (tracks == undefined) {
            return null;
        }

        var links = [];

        for (let track of tracks) {
            links.push({
                link: "/t/" + track.id,
                title: track.name
            });
        }

        var header = "Tracks (" + links.length + ")";

        return (<SidebarMenu header={header} headerTo="/tracks" links={links} />)
    }

    render() {
        let { account, tracks, views, ui } = this.props;
        const className = "sidebar menu " + (ui.sidebar.open ? "open" : "closed");

        return (
            <div>
                <div className={className}>
                    {this.renderUserBadge()}
                    <ul className="nav nav-sidebar text-truncate">
                        <li className="inbox"><Link to="/"><span className="fa-stack nom-green-light"><FontAwesome name="circle" stack="2x" /><FontAwesome name="envelope-open" inverse stack="1x" /></span> Inbox</Link></li>
                        <li className="pinned"><Link to="/pinned"><span className="fa-stack nom-orange-light"><FontAwesome name="circle" stack="2x" /><FontAwesome name="thumb-tack" inverse stack="1x" /></span> Pinned</Link></li>
                        <li className="drafts"><Link to="/drafts"><span className="fa-stack nom-purple"><FontAwesome name="circle" stack="2x" /><FontAwesome name="pencil" inverse stack="1x" /></span> Drafts</Link></li>
                    </ul>
                    {this.renderTracksMenu(tracks)}
                    <ul className="nav nav-sidebar text-truncate">
                        <li className="trash"><Link to="/"><FontAwesome name="trash" /> Trash</Link></li>
                        <li className="logout"><a href="#" onClick={this.logout.bind(this)}><FontAwesome name="sign-out" /> Logout</a></li>
                    </ul>
                </div>
                <div className={"hidden-sidebar " + (ui.sidebar.open ? "open" : "closed")} onClick={this.closeSidebar.bind(this)}>
                </div>
            </div>
        )
    }
}

export default Sidebar;
