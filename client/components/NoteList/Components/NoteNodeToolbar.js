import React from 'react';
import { browserHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { toast } from 'react-toastify';

class NoteNodeToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleArchiveClick = this.handleArchiveClick.bind(this);
        this.handleInboxClick = this.handleInboxClick.bind(this);
        this.handlePinNoteClick = this.handlePinNoteClick.bind(this);
        this.handleUnpinNoteClick = this.handleUnpinNoteClick.bind(this);
        this.handleDeleteDraftClick = this.handleDeleteDraftClick.bind(this);
    }

    handleArchiveClick(e) {
        e.preventDefault();
        this.props.handleInboxNote(this.props.id, false);

        toast(
            <div className="toastify-action">
                <button className="btn btn-icon btn-pink" onClick={this.handleInboxClick}><FontAwesome name="undo" /></button>
                <span>Note archived</span>
            </div>
        );
    }

    handleInboxClick(e) {
        e.preventDefault();
        this.props.handleInboxNote(this.props.id, true);
        toast.dismiss();
    }

    handlePinNoteClick(e) {
        e.preventDefault();
        this.props.handlePinNote(this.props.id, true);
    }

    handleUnpinNoteClick(e) {
        e.preventDefault();
        this.props.handlePinNote(this.props.id, false);
    }

    handleDeleteDraftClick(e) {
        e.preventDefault();
        browserHistory.push('/new/note/' + this.props.id + '/delete');
    }

    renderUnpinnedButton() {
        return (
            <object><button type="button" onClick={this.handlePinNoteClick} aria-label="Pin Note" className="btn btn-sm btn-secondary"><FontAwesome name="thumb-tack" rotate={270} /></button></object>
        )
    }

    renderPinnedButton() {
        return (
            <object><button type="button" onClick={this.handleUnpinNoteClick} aria-label="Pin Note" className="btn btn-sm btn-secondary"><FontAwesome name="thumb-tack" className="note-orange" /></button></object>
        )
    }

    renderInboxedButton() {
        return (
            <object><button type="button" onClick={this.handleArchiveClick} aria-label="Archive Note" className="btn btn-sm btn-secondary"><FontAwesome name="check" /></button></object>
        )
    }

    renderArchivedButton() {
        return (
            <object><button type="button" onClick={this.handleInboxClick} aria-label="Inbox Note" className="btn btn-sm btn-secondary"><FontAwesome name="envelope" /></button></object>
        )
    }

    renderTrashDraftButton() {
        return (
            <object><button type="button" onClick={this.handleDeleteDraftClick} aria-label="Delete Draft" className="btn btn-sm btn-secondary"><FontAwesome name="trash" /></button></object>
        )
    }

    renderNoteToolbar() {
        let { note } = this.props;

        var isInbox = false;
        var isPinned = false;
        if (note.views.indexOf("inbox") >= 0)
            isInbox = true;
        if (note.views.indexOf("pinned") >= 0)
            isPinned = true;

        return (
            <div className="btn-group toolbar node-toolbar" role="group">
                {isPinned ? this.renderPinnedButton() : this.renderUnpinnedButton()}
                {isInbox ? this.renderInboxedButton() : this.renderArchivedButton()}
                <object><button type="button" aria-label="More options" className="btn btn-sm btn-secondary"><FontAwesome name="trash" /></button></object>
            </div>
        )
    }

    renderDraftToolbar() {
        let { note } = this.props;

        return (
            <div className="btn-group toolbar node-toolbar" role="group">
                {this.renderTrashDraftButton()}
            </div>
        )
    }

    render() {
        let { type } = this.props;

        switch (type) {
            case 'draft':
                return this.renderDraftToolbar();
            case 'note':
                return this.renderNoteToolbar();
        }
        return this.renderNoteToolbar();
    }
}

export default NoteNodeToolbar;