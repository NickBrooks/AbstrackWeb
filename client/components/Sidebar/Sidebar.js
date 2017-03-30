import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Avatar from '../Avatar/Avatar';
import SidebarMenu from './Components/SidebarMenu';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
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

    renderViewsMenu(views) {
        if (views == undefined) {
            return null;
        }

        var links = [];

        for (let view of views) {
            links.push({
                link: "/v/" + view.id,
                title: view.name
            });
        }

        var header = "Views (" + links.length + ")";

        return (<SidebarMenu header={header} headerTo="/views" links={links} />)
    }

    render() {
        let { account, tracks, views } = this.props;

        return (
            <div className="sidebar menu">
                {this.renderUserBadge()}
                <ul className="nav nav-sidebar">
                    <li className="inbox"><Link to="/"><FontAwesome name="envelope-open" /> Inbox</Link></li>
                    <li className="pinned"><Link to="/pinned"><FontAwesome name="thumb-tack" /> Pinned</Link></li>
                    <li className="notes"><Link to="/notes"><FontAwesome name="sticky-note" /> Notes</Link></li>
                    <li className="tasks"><Link to="/tasks"><FontAwesome name="check" /> Tasks</Link></li>
                    <li className="documents"><Link to="/documents"><FontAwesome name="file-text" /> Documents</Link></li>
                    <li className="video"><Link to="/video"><FontAwesome name="video-camera" /> Video</Link></li>
                </ul>
                {this.renderTracksMenu(tracks)}
                {this.renderViewsMenu(views)}
                <ul className="nav nav-sidebar">
                    <li className="trash"><Link to="/"><FontAwesome name="trash" /> Trash</Link></li>
                    <li className="logout"><a href="#" onClick={this.logout.bind(this)}><FontAwesome name="sign-out" /> Logout</a></li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;
