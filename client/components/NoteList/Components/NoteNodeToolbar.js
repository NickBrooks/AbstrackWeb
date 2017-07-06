import React from 'react';
import FontAwesome from 'react-fontawesome';
import { toast } from 'react-toastify';
import { ToastifyAction } from '../../Toastify/Toastify';

class NoteNodeToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleArchiveClick = this.handleArchiveClick.bind(this);
        this.handlePinNoteClick = this.handlePinNoteClick.bind(this);
        this.handleUnpinNoteClick = this.handleUnpinNoteClick.bind(this);
    }

    handleArchiveClick(e) {
        e.preventDefault();
        let { note } = this.props;

        toast(<ToastifyAction text="Note archived" icon="undo" action=""/>);
    }

    handlePinNoteClick(e) {
        e.preventDefault();
        this.props.handlePinNote(this.props.id, true);
    }

    handleUnpinNoteClick(e) {
        e.preventDefault();
        this.props.handlePinNote(this.props.id, false);
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
            <object><button type="button" onClick={this.handleArchiveClick} aria-label="Inbox Note" className="btn btn-sm btn-secondary"><FontAwesome name="check" /></button></object>
        )
    }

    renderArchivedButton() {
        return (
            <object><button type="button" onClick={this.handleArchiveClick} aria-label="Inbox Note" className="btn btn-sm btn-secondary"><FontAwesome name="envelope-open" /></button></object>
        )
    }

    render() {
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
                <object><button type="button" aria-label="More options" className="btn btn-sm btn-secondary"><FontAwesome name="caret-down" /></button></object>
            </div>
        )
    }
}

export default NoteNodeToolbar;