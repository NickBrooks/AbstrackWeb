import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Avatar from '../Reusable/Avatar';
import SidebarMenu from './SidebarMenu';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    renderProjectsMenu(projects) {
        if (projects == undefined) {
            return null;
        }

        var links = [];

        for (let project of projects) {
            links.push({
                link: "p/" + project.id,
                title: project.name
            });
            console.log(links);
        }

        return (<SidebarMenu header="Projects" headerTo="/projects" links={links} />)
    }

    render() {
        let { userProfile, projects } = this.props;

        return (
            <div className="sidebar menu">
                <Link to="/"><h6><Avatar user={userProfile} size="30" customClass="pull-left" /> {userProfile.display_name} <FontAwesome name="caret-down" /></h6></Link>
                <div className="clearfix"></div>
                {this.renderProjectsMenu(projects)}
                <ul className="nav nav-sidebar">
                    <li>
                        <Link to="#">
                            <h6>Views (3)</h6>
                        </Link>
                    </li>
                    <li><Link to="">+NavItem</Link></li>
                    <li><Link to="">+NavItemAgain</Link></li>
                    <li><Link to="">+OneMoreNav</Link></li>
                    <li><Link to="">+AnotherItem</Link></li>
                    <li><Link to="">+Chimpanzee</Link></li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li className="pinned"><Link to="/pinned"><FontAwesome name="thumb-tack" /> Pinned</Link></li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;
