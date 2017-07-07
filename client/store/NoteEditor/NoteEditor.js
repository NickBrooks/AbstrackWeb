import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { conformHashtag, delay, extractNote, setDocumentTitle } from '../../functions';
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
        this.handleAddManualHashtag = this.handleAddManualHashtag.bind(this);
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

        // don't save empty drafts
        if (!noteEditor.title && !noteEditor.body && !noteEditor.track && noteEditor.hashtags.length <= 1) return;

        this.clearTimeouts();
        this.setTimeout(function () { (params.draftId ? handleSaveDraft(params.draftId, noteEditor) : handleAddDraft(noteEditor)) }, 2500);
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

    handleAddManualHashtag(hashtag) {
        // conform the bad boy
        hashtag = conformHashtag(hashtag);

        // exists index lookup
        var exists = this.props.noteEditor.hashtags.findIndex((lookupTag) => lookupTag == hashtag);

        // if a hashtag exists, add to props and save draft
        if (!!hashtag && hashtag.length >= 2 && exists == -1) {
            this.props.addDraftHashtag(hashtag);
            delay(500).then(() => {
                this.saveDraft();
            })
        }

        //reset typeahead
        this._hashtagTypeahead.getInstance().state.text = "";
    }

    handleHashtagsChange(e) {
        if (!e || e.length < 0) return;

        this.props.setDraftHashtags(e);
        delay(500).then(() => {
            this.saveDraft();
        })
    }

    renderEditor() {
        let { ui, noteEditor } = this.props;
        setDocumentTitle(!noteEditor || !noteEditor.title ? "New Note" : noteEditor.title);
        var options = ['afl', 'github', 'project', 'chicken', 'chick', 'chuck', 'hammer', 'hartlett'];
        options = options.filter(function (el) {
            return !noteEditor.hashtags.includes(el);
        });

        const filterHashtagsByCallback = (option, text) => {
            if (!text) return option;

            return (
                (option.indexOf(conformHashtag(text)) !== -1)
            );
        };

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
                            <form onSubmit={(e) => { e.preventDefault(); this.handleAddManualHashtag(this._hashtagTypeahead.getInstance().state.text); }}>
                                <Typeahead
                                    className="form-control editor-hashtags mousetrap"
                                    ref={ref => this._hashtagTypeahead = ref}
                                    filterBy={filterHashtagsByCallback}
                                    multiple
                                    dropup
                                    maxResults={5}
                                    paginate={false}
                                    options={options}
                                    placeholder="Hashtags"
                                    emptyLabel=""
                                    selected={noteEditor.hashtags}
                                    onChange={(e) => this.handleHashtagsChange(e)}
                                    submitFormOnEnter={true}
                                />
                            </form>
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
