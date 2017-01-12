import React from 'react';
import FontAwesome from 'react-fontawesome';
import Modal from 'react-bootstrap-modal';

const NewNomModal = React.createClass({
    renderProjects() {
        let { projects } = this.props;
        return (
            <select className="form-control" name="cars">
                <option>Project</option>
                {projects.map((project) => <option value={project.id}>{project.name}</option>)}
            </select>
        )
    },
    renderMilestones() {
        let { milestones } = this.props;
        return (
            <select className="form-control" name="cars">
                <option>Milestone</option>
                {milestones.map((milestone) => <option value={milestone.id}>{milestone.name}</option>)}
            </select>
        )
    },
    render() {
        return (
            <div>
                <Modal show={this.props.open} onHide={this.props.toggleNewNomModal.bind(null, false)} aria-labelledby="ModalHeader" className="nom-editor">
                    <Modal.Header>
                        <Modal.Title id='ModalHeader'>
                            <FontAwesome name="pencil" />
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-group row">
                            <div className="col-xs-12">
                                <input className="form-control editor-title" type="text" placeholder="Title" />
                            </div>
                            <div className="col-xs-6">
                                <input className="form-control editor-hashtags" type="text" placeholder="#hashtags" />
                            </div>
                            <div className="col-xs-3">
                                {this.renderProjects()}
                            </div>
                            <div className="col-xs-3">
                                {this.renderMilestones()}
                            </div>
                            <div className="col-xs-12">
                                <textarea className="form-control editor-body" placeholder="Say something" />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-success' onClick={this.closeModal}><FontAwesome name="thumbs-up" /> Publish</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
})

export default NewNomModal;
