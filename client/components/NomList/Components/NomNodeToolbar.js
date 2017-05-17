import React from 'react';
import FontAwesome from 'react-fontawesome';

class NomNodeToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.handlePinNomClick = this.handlePinNomClick.bind(this);
        this.handleUnpinNomClick = this.handleUnpinNomClick.bind(this);
    }

    handlePinNomClick(e) {
        e.preventDefault();
        this.props.handlePinNom(this.props.id, true);
    }

    handleUnpinNomClick(e) {
        e.preventDefault();
        this.props.handlePinNom(this.props.id, false);
    }

    renderUnpinnedButton() {
        return (
            <object><button type="button" onClick={this.handlePinNomClick} aria-label="Pin Nom" className="btn btn-sm btn-secondary"><FontAwesome name="thumb-tack" rotate={270} /></button></object>
        )
    }

    renderPinnedButton() {
        return (
            <object><button type="button" onClick={this.handleUnpinNomClick} aria-label="Pin Nom" className="btn btn-sm btn-secondary"><FontAwesome name="thumb-tack" /></button></object>
        )
    }

    renderInboxedButton() {
        return (
            <object><button type="button" aria-label="Inbox Nom" className="btn btn-sm btn-secondary"><FontAwesome name="check" /></button></object>
        )
    }

    renderArchivedButton() {
        return (
            <object><button type="button" aria-label="Inbox Nom" className="btn btn-sm btn-secondary"><FontAwesome name="envelope-open" /></button></object>
        )
    }

    render() {
        let { noms, id } = this.props;
        const i = noms.findIndex((nom) => nom.id === id);
        const nom = noms[i].data;
        const views = noms[i].views;

        var isInbox = false;
        var isPinned = false;
        if (views.indexOf("inbox") >= 0)
            isInbox = true;
        if (views.indexOf("pinned") >= 0)
            isPinned = true;

        return (
            <div className="btn-group toolbar node-toolbar" role="group">
                {isPinned ? this.renderPinnedButton() : this.renderUnpinnedButton()}
                {isInbox ? this.renderInboxedButton() : this.renderArchivedButton()}
                <object><button type="button" aria-label="More options" className="btn btn-sm btn-secondary"><FontAwesome name="caret-down" /></button></object>
            </div>
        )
    }
}

export default NomNodeToolbar;