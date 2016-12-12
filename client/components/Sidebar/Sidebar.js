import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

const Sidebar = React.createClass({
    render() {
        return (
            <div id="sidebar" className="col-sm-3 col-md-2 sidebar menu">
                <Link to="/"><h6>Conquest Solutions <FontAwesome name="caret-down" /></h6></Link>
                <ul className="nav nav-sidebar">
                    <li><a href="#"><h6>Projects (39)</h6></a></li>
                    <li className="active"><a href="#">#selected <span className="sr-only">(current)</span></a></li>
                    <li><a href="#">#ticketsystem</a></li>
                    <li><a href="#">#invoicing</a></li>
                    <li><a href="#">#forum</a></li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li>
                        <a href="#">
                            <h6>Views (3)</h6>
                        </a>
                    </li>
                    <li><a href="">+NavItem</a></li>
                    <li><a href="">+NavItemAgain</a></li>
                    <li><a href="">+OneMoreNav</a></li>
                    <li><a href="">+AnotherItem</a></li>
                    <li><a href="">+Chimpanzee</a></li>
                </ul>
            </div>
        )
    }
})

export default Sidebar;
