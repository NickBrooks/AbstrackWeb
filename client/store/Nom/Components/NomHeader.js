import React from 'react';
import { Link } from 'react-router';
import HashtagEditor from './HashtagEditor';
import FontAwesome from 'react-fontawesome';

class NomHeader extends React.Component {
    constructor(props) {
        super(props);
        this.handlePinNom = this.handlePinNom.bind(this);
    }

    handlePinNom(value, e) {
        e.preventDefault();
        let { nom, pinNom } = this.props;

        //pin it!
        pinNom(nom.id, value);
    }

    renderPinned() {
        let { nom } = this.props;

        if (nom.pinned == true) {
            return (
                <Link to="#" onClick={this.handlePinNom.bind(this, false)}>
                    <span className="light pinned"><FontAwesome name="thumb-tack" /></span>
                </Link>
            )
        } else {
            return (
                <Link to="#" onClick={this.handlePinNom.bind(this, true)}>
                    <span className="light"><FontAwesome name="thumb-tack" rotate={270} /></span>
                </Link>
            )
        }
    }

    render() {
        let {
            addHashtagToNom,
            nom
        } = this.props;

        return (
            <div className="nom-header">
                <h3>{this.props.nom.title} {this.renderPinned()}</h3>
                <div className="hashtags">
                    <HashtagEditor hashtags={nom.hashtags} nomId={nom.id} addHashtagToNom={addHashtagToNom} />
                </div>
            </div>
        )
    }
}

export default NomHeader;
