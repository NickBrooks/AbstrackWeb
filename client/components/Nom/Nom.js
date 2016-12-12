import React from 'react';
import NomBody from './NomBody';
import NomTitle from './NomTitle';
import HashtagSpan from './HashtagSpan';
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
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="ibox">
                                <NomTitle title={DummyNom.title} />
                                <div class="nom-hashtags">
                                  {DummyNom.hashtags.map((hashtag, i) => <HashtagSpan {...this.props} hashtag={hashtag.tag} customClass="default" key={i} i={i} />)}
                                </div>
                                <hr />
                                <NomBody body={DummyNom.body} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-2 sub-bar">
                    <SidebarSubMenu menuItems={this.renderMenuItemArray(DummyNom.project)} textKey="title" linkKey="id" icon="bookmark" title="Project" />
                    <SidebarSubMenu menuItems={this.renderMenuItemArray(DummyNom.milestone)} textKey="title" linkKey="id" icon="calendar-o" title="Milestone" />
                </div>
            </div>
        )
    }
});

export default Nom;
