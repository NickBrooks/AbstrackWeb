import React from 'react';
import { Link } from 'react-router';
import HashtagSpan from '../Reusable/HashtagSpan';
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
        return (
            <div className="nom-header">
                <h3>{this.props.nom.title} {this.renderPinned()}</h3>
                <div className="hashtags">
                    {this.props.nom.hashtags.map((hashtag, i) => <HashtagSpan {...this.props} hashtag={hashtag} customClass="default" key={i} i={i} />)}<FontAwesome name="plus" />
                </div>
            </div>
        )
    }
}

export default NomHeader;
