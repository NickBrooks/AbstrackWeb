import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import NomBody from './Components/NomBody';
import NomHeader from './Components/NomHeader';
import Avatar from '../../components/Avatar/Avatar';
import Comments from '../Comment/Comments';

class Nom extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { nomId } = this.props.params;
        const { noms } = this.props;
        const i = noms.findIndex((nom) => nom.id === nomId);
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
}

export default Nom;
