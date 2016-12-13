import React from 'react';
import NomBody from './NomBody';
import NomHeader from './NomHeader';
import SidebarSubMenu from '../Reusable/SidebarSubMenu';
import UserBadge from '../Reusable/UserBadge';

//dummy data
import DummyNom from '../../dummydata/DummyNom';

const Nom = React.createClass({
    renderMenuItemArray(menuItem) {
        return [menuItem];
    },
    render() {
        return (
            <div className="row core-body">
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="ibox">
                                <NomHeader title={DummyNom.title} hashtags={DummyNom.hashtags} />
                                <hr />
                                <NomBody body={DummyNom.body} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2 sub-bar">
                    <UserBadge user={DummyNom.created_by} />
                    <SidebarSubMenu menuItems={this.renderMenuItemArray(DummyNom.project)} textKey="title" linkKey="id" icon="bookmark" title="Project" />
                    <SidebarSubMenu menuItems={this.renderMenuItemArray(DummyNom.milestone)} textKey="title" linkKey="id" icon="calendar-o" title="Milestone" />
                </div>
            </div>
        )
    }
});

export default Nom;
