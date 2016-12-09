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
        const { nomId } = this.props.params;

        return (
            <div className="row core-body">
                <div className="col-sm-12">
                    <h3 className="view-header">Daniel Ricciardo {nomId} <span className="light">#12 <i className="fa fa-caret-down"></i></span></h3>
                </div>
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-12">
                            <NomDescription body={DummyNom.body} />
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
                    <SidebarSubMenu menuItems={this.renderMenuItemArray(DummyNom.project)} textKey="title" linkKey="id" icon="bookmark" title="Project" />
                    <SidebarSubMenu menuItems={this.renderMenuItemArray(DummyNom.milestone)} textKey="title" linkKey="id" icon="calendar-o" title="Milestone" />
                    <SidebarSubMenu menuItems={DummyNom.hashtags} textKey="tag" linkKey="tag" icon="hashtag" title="Hashtags" />
                </div>
            </div>
        )
    }
});

export default Nom;