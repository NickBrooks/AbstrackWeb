import React from 'react';
import { conformHashtags, extractNom, setDocumentTitle } from '../../functions';
import RenderMarkdown from '../../components/RenderMarkdown/RenderMarkdown';
import NomEditorFooter from './Components/NomEditorFooter';

class NomEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleHashtagsChange = this.handleHashtagsChange.bind(this);

        this.state = {
            draftId: props.params.draftId,
            draft: {
                data: {
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
                }
            }
        }
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
        let { draftId } = this.state;

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

    componentWillReceiveProps() {
        let { noms } = this.props;
        let { draftId } = this.state;

        if (draftId != null) {
            this.setState({ draft: extractNom(noms, draftId) });
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
        let { handleSaveDraft } = this.props;
        let { draft } = this.state;
        this.clearTimeouts();
        this.setTimeout(function () { handleSaveDraft(draft); }, 5000);
    }

    handleHashtagsChange(e) {
        var newState = this.state;
        newState["draft"]["data"]["hashtags"] = conformHashtags(e.target.value);
        this.setState(newState);
        this.saveDraft();
    }

    handleTextChange(key, e) {
        var newState = this.state;
        newState["draft"]["data"][key] = e.target.value;
        this.setState(newState);
        this.saveDraft();
    }

    renderLoaded() {
        let { ui } = this.props;
        let { body, hashtags, title } = this.state.draft.data;
        setDocumentTitle(title ? title : "New Nom");

        return (
            <div>
                <div className="nom-editor">
                    <input type="text" className="form-control editor-title mousetrap" defaultValue={title} placeholder="Title" onChange={this.handleTextChange.bind(null, "title")} />
                    <hr />
                    {ui.nom.editor.previewMode ?
                        <RenderMarkdown markdown={body} className="preview-mode" /> :
                        <div className="editor-body">
                            <textarea ref="body" className="form-control mousetrap" defaultValue={body} placeholder="Say something..." onChange={this.handleTextChange.bind(null, "body")} />
                            <hr />
                            <input type="text" className="form-control editor-hashtags mousetrap" defaultValue={hashtags} placeholder="Hashtags" onChange={this.handleHashtagsChange} />
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
