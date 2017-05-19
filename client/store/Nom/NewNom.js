import React from 'react';
import { setDocumentTitle } from '../../functions';
import RenderMarkdown from '../../components/RenderMarkdown/RenderMarkdown';
import NewNomFooter from './Components/NewNomFooter';

class NewNom extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyChange = this.handleKeyChange.bind(this);

        this.state = {
            body: "",
            hashtags: ""
        }
    }

    componentWillMount() {
        this.props.toggleNewNomButton(false);
        setDocumentTitle("New Nom");
    }

    componentWillUnmount() {
        this.props.toggleNewNomButton(true);
        setDocumentTitle();
    }

    handleKeyChange(key, e) {
        var newState = this.state;
        newState[key] = e.target.value;
        this.setState(newState);
    }

    render() {
        let { ui } = this.props;
        let { body, hashtags } = this.state;

        return (
            <div>
                <div className="nom-editor">
                    <input type="text" className="form-control editor-title mousetrap" placeholder="Title" />
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
                <NewNomFooter {...this.props} />
            </div>
        )
    }
}

export default NewNom;
