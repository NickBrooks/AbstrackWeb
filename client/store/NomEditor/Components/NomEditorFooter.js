import React from 'react';
import FontAwesome from 'react-fontawesome';
import Mousetrap from 'mousetrap';

class NewNomFooter extends React.Component {
    constructor(props) {
        super(props);
        this.togglePreview = this.togglePreview.bind(this);
        this.handlePreviewClick = this.handlePreviewClick.bind(this);
    }

    handlePreviewClick(e) {
        e.preventDefault();
        this.togglePreview();
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
        let { ui } = this.props;

        return (
            <div className="nom-editor-footer">
                <div className="actions pull-left col-sm-2">
                    <label className="auios-label">
                        <input className="auios-toggle" type="checkbox" /> Inbox
                    </label>
                </div>
                <div className="actions pull-right">
                    {ui.draft.savingStatus ? <button type="button" className="btn btn-sm btn-link">{ui.draft.savingStatus}</button> : undefined}
                    {ui.nom.editor.previewMode ?
                        <button type="button" className="btn btn-sm btn-info" onClick={this.handlePreviewClick}><FontAwesome name="pencil" /> Edit</button> :
                        <button type="button" className="btn btn-sm btn-info" onClick={this.handlePreviewClick}><FontAwesome name="eye" /> Preview</button>
                    }
                    <button type="button" className="btn btn-sm btn-success"><FontAwesome name="check" /> Publish</button>
                </div>
            </div>
        )
    }
}

export default NewNomFooter;