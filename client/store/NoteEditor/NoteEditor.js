import React from 'react';
import { conformHashtags, delay, extractNote, setDocumentTitle } from '../../functions';
import RenderMarkdown from '../../components/RenderMarkdown/RenderMarkdown';
import InitialNoteEditorData from '../../data/NoteEditor';
import NoteEditorFooter from './Components/NoteEditorFooter';
import NoteEditorLoading from './Components/NoteEditorLoading';
import NoteEditorConfirmDelete from './Components/NoteEditorConfirmDelete';
import NoteTrackSelector from './Components/NoteTrackSelector';

class NoteEditor extends React.Component {
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
        setDraft(InitialNoteEditorData);
    }

    clearTimeouts() {
        this.timeouts.forEach(clearTimeout);
    }

    componentWillMount() {
        let { handleGetDraft, notes, setSearchBar, toggleNewNoteButton, togglePreviewMode, updateDraftEditorStatus } = this.props;
        let { draftId } = this.props.params;

        // set the timeouts
        this.timeouts = [];

        // set right UI
        toggleNewNoteButton(false);
        togglePreviewMode(false);

        this.setEmptyDraftInProps();
        setSearchBar({
            defaultValue: "New Note",
            class: "searchBar-drafts"
        });

        // set editor mode to editor if required
        updateDraftEditorStatus("editor");

        // check if draft specified
        if (draftId != null) {
            handleGetDraft(draftId);
        }
    }

    componentWillUnmount() {
        let { setSearchBar, toggleNewNoteButton, togglePreviewMode, updateDraftSavingStatus } = this.props;

        toggleNewNoteButton(true);
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
        let { noteEditor, handleAddDraft, handleSaveDraft, params } = this.props;

        this.clearTimeouts();
        this.setTimeout(function () { (params.draftId ? handleSaveDraft(params.draftId, noteEditor) : handleAddDraft(noteEditor)) }, 2500);
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
        let { value } = e.target;
        this.props.setDraftBody(value);
        delay(500).then(() => {
            this.saveDraft();
        })
    }

    renderEditor() {
        let { ui, noteEditor } = this.props;
        setDocumentTitle(!noteEditor || !noteEditor.title ? "New Note" : noteEditor.title);

        return (
            <div>
                <div className="note-editor">
                    <div className="row">
                        <div className="col-sm-9">
                            <input type="text" className="form-control editor-title mousetrap" defaultValue={(!noteEditor || !noteEditor.title ? null : noteEditor.title)} placeholder="Title" tabIndex={1} onChange={this.handleTitleChange} />
                        </div>
                        <div className="col-sm-3">
                            <NoteTrackSelector {...this.props} />
                        </div>
                    </div>
                    <hr />
                    {ui.note.editor.previewMode ?
                        <RenderMarkdown markdown={noteEditor.body} className="preview-mode" /> :
                        <div className="editor-body">
                            <textarea ref="body" className="form-control mousetrap" defaultValue={(!noteEditor || !noteEditor.body ? null : noteEditor.body)} placeholder="Say something, Ctrl/Cmd+8 to preview..." tabIndex={2} onChange={this.handleBodyChange} />
                            <hr />
                            <input type="text" className="form-control editor-hashtags mousetrap" defaultValue={(!noteEditor || !noteEditor.hashtags ? null : noteEditor.hashtags)} placeholder="Hashtags" tabIndex={3} onChange={this.handleHashtagsChange} />
                        </div>
                    }
                </div>
                <NoteEditorFooter {...this.props} />
            </div>
        )
    }

    render() {
        let { ui } = this.props;

        switch (ui.draft.editorStatus) {
            case 'loading':
                return <NoteEditorLoading />;
            case 'confirmDelete':
                return <NoteEditorConfirmDelete {...this.props} />;
        }
        return this.renderEditor();
    }
}

export default NoteEditor;
