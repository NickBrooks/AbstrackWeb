import React from 'react';
import NomDescription from './NomDescription';

const Nom = React.createClass({
    render() {
        const { nomId } = this.props.params;

        return (
            <div className="row core-body">
                <div className="col-sm-12">
                    <h3 className="view-header">Daniel Ricciardo {nomId} <span className="light">#12 <i className="fa fa-caret-down"></i></span></h3>
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-12">
                            <NomDescription />
                        </div>
                        <div className="col-sm-3">
                            <div className="ibox"><img src="https://avatars2.githubusercontent.com/u/4286755?v=3&s=460"
                                alt="..." className="img-circle" /></div>
                        </div>
                        <div className="col-sm-3">
                            <div className="ibox">Box 2</div>
                        </div>
                        <div className="col-sm-3">
                            <div className="ibox">Box 3</div>
                        </div>
                        <div className="col-sm-3">
                            <div className="ibox">Box 3</div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2 sub-bar">
                    <ul className="nav nav-sidebar sub-menu project">
                        <li>
                            <h5><i className="fa fa-bookmark"></i> Project</h5>
                        </li>
                        <li><a href="#">Ticket System</a></li>
                    </ul>
                    <ul className="nav nav-sidebar sub-menu milestone">
                        <li>
                            <h5><i className="fa fa-calendar-o"></i> Milestone</h5>
                        </li>
                        <li><a href="#">Project delivery</a></li>
                    </ul>
                    <ul className="nav nav-sidebar sub-menu tags">
                        <li>
                            <h5><i className="fa fa-hashtag"></i> Tags</h5>
                        </li>
                        <li><a href="">#NavItem</a></li>
                        <li><a href="">#NavItemAgain</a></li>
                        <li><a href="">#OneMoreNav</a></li>
                    </ul>
                </div>
            </div>
        )
    }
});

export default Nom;