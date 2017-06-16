import React from 'react';
import FontAwesome from 'react-fontawesome';
import Mousetrap from 'mousetrap';
import { delay, } from '../../../functions';
import ReactTooltip from 'react-tooltip'

class NewNomFooter extends React.Component {
    constructor(props) {
        super(props);
        this.handleInboxChange = this.handleInboxChange.bind(this);
        this.togglePreview = this.togglePreview.bind(this);
        this.handlePreviewClick = this.handlePreviewClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handlePublishClick = this.handlePublishClick.bind(this);
    }

    saveDraft() {
        let { nomEditor, handleAddDraft, handleSaveDraft, params } = this.props;

        // do the save only if there's already a body and title 
        if (nomEditor.body != null || nomEditor.title != null) {
            (params.draftId ? handleSaveDraft(params.draftId, nomEditor) : handleAddDraft(nomEditor));
        }
    }

    handlePublishClick(e) {
        e.preventDefault();
        this.props.handleAddNom(this.props.nomEditor);
    }

    handleDeleteClick(e) {
        e.preventDefault();
        this.props.updateDraftEditorStatus("confirmDelete");
    }

    handlePreviewClick(e) {
        e.preventDefault();
        this.togglePreview();
    }

    handleInboxChange() {
        this.props.toggleSkipInbox(this.refs.skipInbox.checked ? false : true);
        delay(500).then(() => {
            this.saveDraft();
        })
    }

    togglePreview() {
        let { ui, togglePreviewMode } = this.props;

        if (ui.nom.editor.previewMode == false) {
            togglePreviewMode(true);
        } else {
            togglePreviewMode(false);
        }
    }

    componentDidMount() {
        let { togglePreview } = this;

        Mousetrap.bind(['ctrl+8'], function () {
            togglePreview();
            return false;
        });
    }

    componentWillUnmount() {
        let { togglePreview } = this;

        Mousetrap.unbind(['ctrl+8'], function () {
            togglePreview();
            return false;
        });
    }

    render() {
        let { nomEditor, params, ui } = this.props;
        const editButton = (<span><FontAwesome name="pencil" /></span>);
        const previewButton = (<span><FontAwesome name="eye" /></span>);

        return (
            <div className="nom-editor-footer">
                <div className="actions pull-left col-sm-2">
                    <label className="toggle-label" data-tip="Inbox note">
                        <input className="toggle-button" ref="skipInbox" type="checkbox" onChange={this.handleInboxChange} checked={!nomEditor.skipInbox} /> Inbox
                    </label>
                </div>
                <div className="actions pull-right">
                    {ui.draft.savingStatus ? <button type="button" className="btn btn-sm btn-link">{ui.draft.savingStatus}</button> : undefined}
                    <button type="button" className="btn btn-sm btn-info" data-tip="Preview draft" onClick={this.handlePreviewClick}>{ui.nom.editor.previewMode ? editButton : previewButton}</button>
                    {!!params.draftId ? <button type="button" className="btn btn-sm btn-info" data-tip="Trash draft" onClick={this.handleDeleteClick}><FontAwesome name="trash" /></button> : undefined}
                    <button type="button" className="btn btn-sm btn-success" disabled={!nomEditor.body && !nomEditor.title ? true : false} onClick={this.handlePublishClick}><FontAwesome name="check" /> Publish</button>
                    <ReactTooltip effect="solid" />
                </div>
            </div>
        )
    }
}

export default NewNomFooter;