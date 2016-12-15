import React from 'react';
import NomBody from './NomBody';
import NomHeader from './NomHeader';
import SidebarSubMenu from '../Reusable/SidebarSubMenu';
import UserBadge from '../Reusable/UserBadge';

//dummy data
import Noms from '../../dummydata/Noms';

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
                                <NomHeader title={Noms.title} hashtags={Noms.hashtags} />
                                <hr />
                                <NomBody body={Noms.body} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2 sub-bar">
                    <UserBadge user={Noms.created_by} />
                    <SidebarSubMenu menuItems={this.renderMenuItemArray(Noms.project)} textKey="title" linkKey="id" icon="bookmark" title="Project" />
                    <SidebarSubMenu menuItems={this.renderMenuItemArray(Noms.milestone)} textKey="title" linkKey="id" icon="calendar-o" title="Milestone" />
                </div>
            </div>
        )
    }
});

export default Nom;
