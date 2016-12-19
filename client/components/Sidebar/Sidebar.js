import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Avatar from '../Reusable/Avatar';

//dummy data
import UserProfile from '../../dummydata/UserProfile';

const Sidebar = React.createClass({
    render() {
        return (
            <div className="sidebar menu">
                <Link to="/"><h6><Avatar user={UserProfile} size="30" customClass="pull-left" /> {UserProfile.display_name} <FontAwesome name="caret-down" /></h6></Link>
                <ul className="nav nav-sidebar">
                    <li><Link to="#"><h6>Projects (39)</h6></Link></li>
                    <li className="active"><Link to="#">#selected <span className="sr-only">(current)</span></Link></li>
                    <li><Link to="#">#ticketsystem</Link></li>
                    <li><Link to="#">#invoicing</Link></li>
                    <li><Link to="#">#forum</Link></li>
                </ul>
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
                    <li className="starred"><Link to="/starred"><FontAwesome name="star" /> Favorites</Link></li>
                </ul>
            </div>
        )
    }
})

export default Sidebar;
