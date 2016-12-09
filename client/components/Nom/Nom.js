import React from 'react';
import NomDescription from './NomDescription';
import SidebarSubMenu from '../Reusable/SidebarSubMenu';

//dummy data
import DummyNom from '../../dummydata/DummyNom';

const Nom = React.createClass({
    renderMenuItemArray(menuItem) {
        return [menuItem];
    },
    render() {
        return (
            <div className="row core-body">
                <div className="col-sm-12">
                    <h3 className="view-header">{DummyNom.title} <span className="light">#12 <i className="fa fa-caret-down"></i></span></h3>
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-12">
                            <NomDescription body={DummyNom.body} />
                        </div>
                    </div>
                </div>

                <div className="col-sm-2 sub-bar">
                    <SidebarSubMenu menuItems={this.renderMenuItemArray(DummyNom.project)} textKey="title" linkKey="id" icon="bookmark" title="Project" />
                    <SidebarSubMenu menuItems={this.renderMenuItemArray(DummyNom.milestone)} textKey="title" linkKey="id" icon="calendar-o" title="Milestone" />
                    <SidebarSubMenu menuItems={DummyNom.hashtags} textKey="tag" linkKey="tag" icon="hashtag" title="Hashtags" />
                </div>
            </div>
        )
    }
});

export default Nom;