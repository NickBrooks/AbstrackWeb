import React from 'react';
import { extractNom, setDocumentTitle } from '../../functions';
import RenderMarkdown from '../../components/RenderMarkdown/RenderMarkdown';
import NomEditorFooter from './Components/NomEditorFooter';

class NomEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyChange = this.handleKeyChange.bind(this);

        this.state = {
            draftId: props.params.draftId,
            draft: {
                data: {
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
                    hashtags: null,
                }
            }
        }
    }

    loadDraft() {
        let { handleGetDraft, noms } = this.props;
        let { draftId } = this.state;

        if (draftId != null) {
            handleGetDraft(draftId);
        }
    }

    componentWillMount() {
        let { setSearchBar, toggleNewNomButton, togglePreviewMode } = this.props;

        // set right UI
        toggleNewNomButton(false);
        togglePreviewMode(false);
        setSearchBar({
            defaultValue: "New Nom",
            class: "searchBar-drafts"
        });

        // check if draft specified
        this.loadDraft();
    }

    componentWillReceiveProps(nextProps) {
        let { noms } = this.props;
        let { draftId } = this.state;

        if (draftId != null) {
            this.setState({ draft: extractNom(noms, draftId) });
        }
    }

    componentWillUnmount() {
        let { setSearchBar, toggleNewNomButton, togglePreviewMode } = this.props;

        toggleNewNomButton(true);
        setDocumentTitle();
        setSearchBar({
            defaultValue: false,
            class: false
        });
    }

    handleKeyChange(key, e) {
        var newState = this.state;
        newState[key] = e.target.value;
        console.log(this.state);
    }

    renderLoading() {
        return (
            <h3>Loading draft...</h3>
        )
    }

    renderLoaded() {
        let { ui } = this.props;
        let { body, hashtags, title } = this.state.draft.data;
        setDocumentTitle(title ? title : "New Nom");

        return (
            <div>
                <div className="nom-editor">
                    <input type="text" className="form-control editor-title mousetrap" defaultValue={title} placeholder="Title" onChange={this.handleKeyChange.bind(null, "title")} />
                    <hr />
                    {ui.nom.editor.previewMode ?
                        <RenderMarkdown markdown={body} className="preview-mode" /> :
                        <div className="editor-body">
                            <textarea ref="body" className="form-control mousetrap" defaultValue={body} placeholder="Say something..." onChange={this.handleKeyChange.bind(null, "body")} />
                            <hr />
                            <input type="text" className="form-control editor-hashtags mousetrap" defaultValue={hashtags} placeholder="Hashtags" onChange={this.handleKeyChange.bind(null, "hashtags")} />
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
            (ui.draft.fetchingStatus ? this.renderLoading() : this.renderLoaded())
        )
    }
}

export default NomEditor;
