import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import NomBody from './NomBody';
import NomHeader from './NomHeader';
import Avatar from '../Reusable/Avatar';
import Comments from '../Comments/Comments'

//dummy data
import Noms from '../../dummydata/Noms';

const Nom = React.createClass({
    renderMenuItemArray(menuItem) {
        return [menuItem];
    },
    renderProjectSubMenu(project) {
      if (project) {
        const link = "/p/" + project.id;
        return (
          <ul className="nav sub-menu">
              <li><h6><FontAwesome name="bookmark" /> Project</h6></li>
              <li><Link to={link}>{project.name}</Link></li>
          </ul>
        )
      }
      return;
    },
    renderMilestoneSubMenu(milestone) {
      if (milestone) {
        const link = "/m/" + milestone.id;
        return (
          <ul className="nav sub-menu">
              <li><h6><FontAwesome name="calendar-o" /> Milestone</h6></li>
              <li><Link to={link}>{milestone.name}</Link></li>
          </ul>
        )
      }
      return;
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
                            <Avatar user={nom.created_by} size="50" customClass="pull-left timeline" />
                            <div className="ibox view-nom">
                                <NomHeader title={nom.title} hashtags={nom.hashtags} />
                                <hr />
                                <NomBody body={nom.body} />
                            </div>
                            <Comments nomId={nom.id} />
                        </div>
                    </div>
                </div>

                <div className="col-sm-2 sub-bar">
                    {this.renderProjectSubMenu(nom.project)}
                    {this.renderMilestoneSubMenu(nom.milestone)}
                </div>
            </div>
        )
    }
});

export default Nom;
