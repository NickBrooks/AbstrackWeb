import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import NomBody from './Components/NomBody';
import NomHeader from './Components/NomHeader';
import Avatar from '../../components/Avatar/Avatar';
import Comments from '../Comment/Comments';
import Nom404 from './Components/Nom404';

class Nom extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let { nomId } = this.props.params;
        const { noms } = this.props;

        if (noms.length == 0) {
            this.props.handleGetNom(nomId);
        } else {
            const i = noms.findIndex((nom) => nom.id === nomId);
            const nom = noms[i].data;

            if (nom === null || moment().subtract(60, 'seconds') > moment(nom.timeFetched)) {
                this.props.handleGetNom(nomId);
            }
        }
    }

    renderLoading() {
        return (
            <h3>Loading...</h3>
        )
    }

    renderLoaded() {
        const { nomId } = this.props.params;
        const { noms } = this.props;
        const i = noms.findIndex((nom) => nom.id === nomId);
        if (i === -1) {
            return (
                <Nom404 />
            )
        }

        const nom = noms[i].data;
        const accountLink = "/u/" + nom.createdBy.id;

        return (
            <div className="row core-body">
                <div className="col-sm-12">
                    <Link to={accountLink}><Avatar user={nom.createdBy} size="50" customClass="pull-left timeline" /></Link>
                    <div className="ibox view-nom">
                        <NomHeader nom={nom} {...this.props} />
                        <hr />
                        <NomBody body={nom.body} />
                    </div>
                    <Comments nomId={nom.id} {...this.props} />
                </div>
            </div>
        )
    }

    render() {
        let { ui } = this.props;

        return (
            (ui.nom.fetchingStatus ? this.renderLoading() : this.renderLoaded())
        )
    }
}

export default Nom;
