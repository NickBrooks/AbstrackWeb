import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import NomBody from './Components/NomBody';
import NomHeader from './Components/NomHeader';
import Avatar from '../../components/Avatar/Avatar';
import Comments from '../Comment/Comments';

class Nom extends React.Component {
    constructor(props) {
        super(props);
    }

    renderMenuItemArray(menuItem) {
        return [menuItem];
    }

    renderTrackSubMenu(track) {
        if (track) {
            const link = "/t/" + track.id;
            return (
                <ul className="nav sub-menu">
                    <li><h6><FontAwesome name="bookmark" /> Track</h6></li>
                    <li><Link to={link}>{track.name}</Link></li>
                </ul>
            )
        }
        return;
    }

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
    }

    render() {
        const { nomId } = this.props.params;
        const { noms } = this.props;
        const i = noms.findIndex((nom) => nom.id === nomId);
        const nom = noms[i];
        const accountLink = "/u/" + nom.created_by.id;
        return (
            <div className="row core-body">
                <div className="col-sm-10">
                    <div className="row">
                        <div className="col-sm-12">
                            <Link to={accountLink}><Avatar user={nom.created_by} size="50" customClass="pull-left timeline" /></Link>
                            <div className="ibox view-nom">
                                <NomHeader nom={nom} {...this.props} />
                                <hr />
                                <NomBody body={nom.body} />
                            </div>
                            <Comments nomId={nom.id} {...this.props} />
                        </div>
                    </div>
                </div>

                <div className="col-sm-2 sub-bar">
                    {this.renderTrackSubMenu(nom.track)}
                    {this.renderMilestoneSubMenu(nom.milestone)}
                </div>
            </div>
        )
    }
}

export default Nom;
