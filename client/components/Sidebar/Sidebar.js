import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Avatar from '../Avatar/Avatar';
import SidebarMenu from './Components/SidebarMenu';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    renderUserBadge() {
        let { userProfile } = this.props;
        var link = "/u/" + userProfile.id;

        return (
            <div className="user-badge">
                <Link to={link}>
                        <Avatar user={userProfile} size="25" customClass="pull-left" /> <span>{userProfile.display_name}</span>
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
        let { userProfile, tracks, views } = this.props;

        return (
            <div className="sidebar menu">
                {this.renderUserBadge()}
                <ul className="nav nav-sidebar">
                    <li className="inbox"><Link to="/"><FontAwesome name="envelope-open" /> Inbox</Link></li>
                    <li className="pinned"><Link to="/pinned"><FontAwesome name="thumb-tack" /> Pinned</Link></li>
                </ul>
                {this.renderTracksMenu(tracks)}
                {this.renderViewsMenu(views)}
                <ul className="nav nav-sidebar">
                    <li className="trash"><Link to="/"><FontAwesome name="trash" /> Trash</Link></li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;
