import React from 'react';
import { conformHashtags, delay, extractNom, setDocumentTitle } from '../../functions';
import RenderMarkdown from '../../components/RenderMarkdown/RenderMarkdown';
import NomEditorFooter from './Components/NomEditorFooter';
import NomTrackSelector from './Components/NomTrackSelector';

class NomEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleHashtagsChange = this.handleHashtagsChange.bind(this);

        props.setDraft({
            id: "",
            createdBy: {
                id: ""
            },
            updatedTime: "",
            title: "",
            body: "",
            track: {
                id: ""
            },
            hashtags: []
        });
    }

    // https://stackoverflow.com/questions/29526739/stopping-a-timeout-in-reactjs
    setTimeout() {
        this.timeouts.push(setTimeout.apply(null, arguments));
    }

    clearTimeouts() {
        this.timeouts.forEach(clearTimeout);
    }

    componentWillMount() {
        let { handleGetDraft, noms, setSearchBar, toggleNewNomButton, togglePreviewMode } = this.props;
        let { draftId } = this.props.params;

        // set the timeouts
        this.timeouts = [];

        // set right UI
        toggleNewNomButton(false);
        togglePreviewMode(false);
        setSearchBar({
            defaultValue: "New Nom",
            class: "searchBar-drafts"
        });

        // check if draft specified
        if (draftId != null) {
            handleGetDraft(draftId);
        }
    }

    componentWillReceiveProps(nextProps) {
        let { params, noms } = nextProps;

        if (params.draftId != null) {
            this.setState({ draftId: params.draftId, draft: extractNom(noms, params.draftId) });
        }
    }

    componentWillUnmount() {
        let { setSearchBar, toggleNewNomButton, togglePreviewMode, updateDraftSavingStatus } = this.props;

        toggleNewNomButton(true);
        setDocumentTitle();
        setSearchBar({
            defaultValue: false,
            class: false
        });
        this.clearTimeouts();
        updateDraftSavingStatus(false);
    }

    saveDraft() {
        let { nomEditor, handleAddDraft, handleSaveDraft } = this.props;

        this.clearTimeouts();
        this.setTimeout(function () { (nomEditor.id ? handleSaveDraft(nomEditor) : handleAddDraft(nomEditor)) }, 2500);
    }

    handleHashtagsChange(e) {
        this.props.setDraftHashtags(conformHashtags(e.target.value));
        delay(500).then(() => {
            this.saveDraft();
        })
    }

    handleTitleChange(e) {
        this.props.setDraftTitle(e.target.value);
        delay(500).then(() => {
            this.saveDraft();
        })
    }

    handleBodyChange(e) {
        this.props.setDraftBody(e.target.value);
        delay(500).then(() => {
            this.saveDraft();
        })
    }

    renderLoaded() {
        let { ui, nomEditor } = this.props;
        setDocumentTitle(nomEditor.title ? nomEditor.title : "New Nom");

        return (
            <div>
                <div className="nom-editor">
                    <div className="row">
                        <div className="col-sm-9">
                            <input type="text" className="form-control editor-title mousetrap" defaultValue={nomEditor.title} placeholder="Title" onChange={this.handleTitleChange} />
                        </div>
                        <div className="col-sm-3">
                            <NomTrackSelector {...this.props} />
                        </div>
                    </div>
                    <hr />
                    {ui.nom.editor.previewMode ?
                        <RenderMarkdown markdown={nomEditor.body} className="preview-mode" /> :
                        <div className="editor-body">
                            <textarea ref="body" className="form-control mousetrap" defaultValue={nomEditor.body} placeholder="Say something..." onChange={this.handleBodyChange} />
                            <hr />
                            <input type="text" className="form-control editor-hashtags mousetrap" defaultValue={nomEditor.hashtags} placeholder="Hashtags" onChange={this.handleHashtagsChange} />
                        </div>
                    }
                </div>
                <NomEditorFooter {...this.props} />
            </div>
        )
    }

    render() {
        let { ui } = this.props;

        return (
            (ui.draft.fetchingStatus ? <h3>Loading draft...</h3> : this.renderLoaded())
        )
    }
}

export default NomEditor;
