import React from 'react';
import FontAwesome from 'react-fontawesome';
import Mousetrap from 'mousetrap';
import { delay, } from '../../../functions';

class NewNomFooter extends React.Component {
    constructor(props) {
        super(props);
        this.handleInboxChange = this.handleInboxChange.bind(this);
        this.togglePreview = this.togglePreview.bind(this);
        this.handlePreviewClick = this.handlePreviewClick.bind(this);
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
        let { nomEditor, ui } = this.props;
        const editButton = (<span><FontAwesome name="pencil" /> Edit</span>);
        const previewButton = (<span><FontAwesome name="eye" /> Preview</span>);

        return (
            <div className="nom-editor-footer">
                <div className="actions pull-left col-sm-2">
                    <label className="toggle-label">
                        <input className="toggle-button" ref="skipInbox" type="checkbox" onChange={this.handleInboxChange} checked={!nomEditor.skipInbox} /> Inbox
                    </label>
                </div>
                <div className="actions pull-right">
                    {ui.draft.savingStatus ? <button type="button" className="btn btn-sm btn-link">{ui.draft.savingStatus}</button> : undefined}
                    <button type="button" className="btn btn-sm btn-info" onClick={this.handlePreviewClick}>{ui.nom.editor.previewMode ? editButton : previewButton}</button>
                    <button type="button" className="btn btn-sm btn-success" onClick={this.handlePublishClick}><FontAwesome name="check" /> Publish</button>
                </div>
            </div>
        )
    }
}

export default NewNomFooter;