import React from 'react';
import { setDocumentTitle } from '../../functions';
import RenderMarkdown from '../../components/RenderMarkdown/RenderMarkdown';
import NewNomFooter from './Components/NewNomFooter';

class NewNom extends React.Component {
    constructor(props) {
        super(props);
        this.handleBodyChange = this.handleBodyChange.bind(this);

        this.state = {
            body: ""
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

    handleBodyChange(event) {
        let { value } = event.target;

        this.setState({
            body: value
        });
        console.log(this.state);
    }

    render() {
        let { ui } = this.props;
        let { body } = this.state;

        return (
            <div>
                <div className="nom-editor">
                    <input type="text" className="form-control editor-title" placeholder="Title" />
                    <hr />
                    <div className="editor-body">
                        {ui.nom.editor.previewMode ? <RenderMarkdown markdown={body} /> : <textarea ref="body" className="form-control" defaultValue={body} placeholder="Say something" onChange={this.handleBodyChange} />}
                    </div>
                </div>
                <NewNomFooter {...this.props} />
            </div>
        )
    }
}

export default NewNom;
