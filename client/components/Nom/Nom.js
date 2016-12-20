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
        const { nomId } = this.props.params;
        const i = Noms.findIndex((nom) => nom.id === nomId);
        const nom = Noms[i];
        return (
            <div className="row core-body">
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="ibox">
                                <NomHeader title={nom.title} hashtags={nom.hashtags} />
                                <hr />
                                <NomBody body={nom.body} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2 sub-bar">
                    <UserBadge user={nom.created_by} />
                    <SidebarSubMenu menuItems={this.renderMenuItemArray(nom.project)} textKey="title" linkKey="id" icon="bookmark" title="Project" />
                    <SidebarSubMenu menuItems={this.renderMenuItemArray(nom.milestone)} textKey="title" linkKey="id" icon="calendar-o" title="Milestone" />
                </div>
            </div>
        )
    }
});

export default Nom;
