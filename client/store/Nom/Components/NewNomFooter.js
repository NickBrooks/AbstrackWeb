import React from 'react';
import FontAwesome from 'react-fontawesome';

class NewNomFooter extends React.Component {
    constructor(props) {
        super(props);
        this.previewModeOn = this.previewModeOn.bind(this);
        this.previewModeOff = this.previewModeOff.bind(this);
    }

    previewModeOn(e) {
        e.preventDefault();

        this.props.togglePreviewMode(true);
    }

    previewModeOff(e) {
        e.preventDefault();

        this.props.togglePreviewMode(false);
    }

    render() {
        let { ui } = this.props;

        return (
            <div className="nom-editor-footer">
                <div className="actions pull-right">
                    {ui.nom.editor.previewMode ?
                        <button type="button" className="btn btn-sm btn-info" onClick={this.previewModeOff}><FontAwesome name="pencil" /> Edit</button> :
                        <button type="button" className="btn btn-sm btn-info" onClick={this.previewModeOn}><FontAwesome name="eye" /> Preview</button>
                    }
                    <button type="button" className="btn btn-sm btn-success"><FontAwesome name="check" /> Publish</button>
                </div>
            </div>
        )
    }
}

export default NewNomFooter;