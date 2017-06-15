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
    }

    // https://stackoverflow.com/questions/29526739/stopping-a-timeout-in-reactjs
    setTimeout() {
        this.timeouts.push(setTimeout.apply(null, arguments));
    }

    setEmptyDraftInProps() {
        let { setDraft } = this.props;

        // set the default
        setDraft({
            id: null,
            createdBy: {
                id: null
            },
            updatedTime: null,
            title: null,
            body: null,
            track: {
                id: null
            },
            hashtags: [],
            skipInbox: false
        });
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
        this.setEmptyDraftInProps();
        setSearchBar({
            defaultValue: "New Nom",
            class: "searchBar-drafts"
        });

        // check if draft specified
        if (draftId != null) {
            handleGetDraft(draftId);
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
        this.setEmptyDraftInProps();
        updateDraftSavingStatus(false);
    }

    componentWillReceiveProps(nextProps) {
        let { draftId } = this.props.params;
    }

    saveDraft() {
        let { nomEditor, handleAddDraft, handleSaveDraft, params } = this.props;

        this.clearTimeouts();
        this.setTimeout(function () { (params.draftId ? handleSaveDraft(params.draftId, nomEditor) : handleAddDraft(nomEditor)) }, 2500);
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
        setDocumentTitle(!nomEditor || !nomEditor.title ? "New Nom": nomEditor.title);

        return (
            <div>
                <div className="nom-editor">
                    <div className="row">
                        <div className="col-sm-9">
                            <input type="text" className="form-control editor-title mousetrap" defaultValue={(!nomEditor || !nomEditor.title ? null : nomEditor.title)} placeholder="Title" tabIndex={1} onChange={this.handleTitleChange} />
                        </div>
                        <div className="col-sm-3">
                            <NomTrackSelector {...this.props} />
                        </div>
                    </div>
                    <hr />
                    {ui.nom.editor.previewMode ?
                        <RenderMarkdown markdown={nomEditor.body} className="preview-mode" /> :
                        <div className="editor-body">
                            <textarea ref="body" className="form-control mousetrap" defaultValue={(!nomEditor || !nomEditor.body ? null : nomEditor.body)} placeholder="Say something..." tabIndex={2} onChange={this.handleBodyChange} />
                            <hr />
                            <input type="text" className="form-control editor-hashtags mousetrap" defaultValue={(!nomEditor || !nomEditor.hashtags ? null : nomEditor.hashtags)} placeholder="Hashtags" tabIndex={3} onChange={this.handleHashtagsChange} />
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
