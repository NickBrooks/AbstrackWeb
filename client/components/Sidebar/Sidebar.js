import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Avatar from '../Reusable/Avatar';
import SidebarMenu from './SidebarMenu';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    renderUserAvatar() {
        let { userProfile } = this.props;
        var link = "/u/" + userProfile.id;

        return (
            <div className="user-profile">
                <Link to={link}>
                        <Avatar user={userProfile} size="25" customClass="pull-left" /> <span>{userProfile.display_name}</span>
                </Link>
                <div className="clearfix"></div>
            </div>
        )
    }

    renderProjectsMenu(projects) {
        if (projects == undefined) {
            return null;
        }

        var links = [];

        for (let project of projects) {
            links.push({
                link: "/p/" + project.id,
                title: project.name
            });
        }

        var header = "Projects (" + links.length + ")";

        return (<SidebarMenu header={header} headerTo="/projects" links={links} />)
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
        let { userProfile, projects, views } = this.props;

        return (
            <div className="sidebar menu">
                {this.renderUserAvatar()}
                <ul className="nav nav-sidebar">
                    <li className="inbox"><Link to="/"><FontAwesome name="envelope-open" /> Inbox</Link></li>
                    <li className="pinned"><Link to="/pinned"><FontAwesome name="thumb-tack" /> Pinned</Link></li>
                </ul>
                {this.renderProjectsMenu(projects)}
                {this.renderViewsMenu(views)}
                <ul className="nav nav-sidebar">
                    <li className="trash"><Link to="/"><FontAwesome name="trash" /> Trash</Link></li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;
