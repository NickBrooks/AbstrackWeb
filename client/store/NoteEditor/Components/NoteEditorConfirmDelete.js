import React from 'react';
import FontAwesome from 'react-fontawesome';
import { push } from 'react-router-redux';

class NoteEditorConfirmDelete extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
    }

    handleCancelClick(e) {
        e.preventDefault();
        this.props.updateDraftEditorStatus("editor");
    }

    handleDeleteClick(e) {
        e.preventDefault();
        let { handleDeleteDraft, params } = this.props;

        !!params.draftId ? handleDeleteDraft(params.draftId) : push("/drafts");
    }

    render() {
        return (
            <div className="text-center">
                <p className="lead"><FontAwesome name="exclamation-triangle" size="lg" className="note-orange-light" /> You're saying goodbye to a potential masterpiece...</p>
                <div className="btn-spacing">
                    <button type="button" className="btn btn-sm btn-outline-primary" onClick={this.handleCancelClick}>No, save me!</button>
                    <button type="button" className="btn btn-sm btn-danger" onClick={this.handleDeleteClick}>Goodbye</button>
                </div>
            </div>
        )
    }
}

export default NoteEditorConfirmDelete;