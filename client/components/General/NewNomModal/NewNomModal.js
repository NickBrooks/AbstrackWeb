import React from 'react';
import FontAwesome from 'react-fontawesome';
import Modal from 'react-bootstrap-modal';
import { conformHashtags } from '../../../functions/functions';

class NewNomModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleNomSubmit = this.handleNomSubmit.bind(this);
    }

    handleNomSubmit(e) {
        e.preventDefault();
        let {
            userProfile,
            addNom,
            toggleNewNomModal
        } = this.props;

        var nom = {
            title: this.refs.title.value,
            body: this.refs.body.value,
            track: {},
            milestone: {},
            type: "markdown",
            pinned: false,
            completed: false,
            inbox: true,
            hashtags: conformHashtags(this.refs.hashtags.value),
            created_by: userProfile
        };

        //addNom(nom);
        addNom(nom);
        this.refs.nomEditor.reset();
        toggleNewNomModal(false);
    }

    renderTracks() {
        let { tracks } = this.props;
        return (
            <select ref="track" className="form-control">
                <option>Track</option>
                {tracks.map((track) => <option key={track.id} value={track.id}>{track.name}</option>)}
            </select>
        )
    }

    renderMilestones() {
        let { milestones } = this.props;
        return (
            <select ref="milestone" className="form-control">
                <option>Milestone</option>
                {milestones.map((milestone) => <option key={milestone.id} value={milestone.id}>{milestone.name}</option>)}
            </select>
        )
    }

    render() {
        return (
            <div>
                <Modal show={this.props.open} onHide={this.props.toggleNewNomModal.bind(null, false)} aria-labelledby="ModalHeader" className="nom-editor">
                    <form ref="nomEditor" onSubmit={this.handleNomSubmit}>
                        <Modal.Header>
                            <Modal.Title id='ModalHeader'>
                                <FontAwesome name="pencil" />
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="form-group row">
                                <div className="col-xs-12">
                                    <input ref="title" className="form-control editor-title" type="text" placeholder="Title" />
                                </div>
                                <div className="col-xs-6">
                                    <input ref="hashtags" className="form-control editor-hashtags" type="text" placeholder="#hashtags" />
                                </div>
                                <div className="col-xs-3">
                                    {this.renderTracks()}
                                </div>
                                <div className="col-xs-3">
                                    {this.renderMilestones()}
                                </div>
                                <div className="col-xs-12">
                                    <textarea ref="body" className="form-control editor-body" placeholder="Say something" />
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button type="submit" className='btn btn-success'><FontAwesome name="thumbs-up" /> Publish</button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default NewNomModal;
