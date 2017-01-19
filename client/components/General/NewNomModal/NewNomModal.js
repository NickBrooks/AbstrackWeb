import React from 'react';
import FontAwesome from 'react-fontawesome';
import Modal from 'react-bootstrap-modal';
import { conformHashtags } from '../../../functions/functions';

const NewNomModal = React.createClass({
    handleNomSubmit(e) {
        e.preventDefault();
        let { userProfile } = this.props;
        let { formValues } = this.refs;

        var nom = {
            title: formValues.title.value,
            body: formValues.body.value,
            project: {
                id: formValues.projects.value,
                name: formValues.projects.text
            },
            milestone: {
                id: formValues.milestones.value,
                name: formValues.milestones.text
            },
            type: "markdown",
            pinned: false,
            completed: false,
            inbox: true,
            hashtags: conformHashtags(formValues.hashtags.value),
            created_by: userProfile
        };

        //NOMVALIDATOR
        console.log(nom);

        addNom(nom);
        formValues.nomEditor.reset();
    },
    renderProjects() {
        let { projects } = this.props;
        return (
            <select ref="projects" className="form-control">
                <option>Project</option>
                {projects.map((project) => <option value={project.id}>{project.name}</option>)}
            </select>
        )
    },
    renderMilestones() {
        let { milestones } = this.props;
        return (
            <select className="form-control">
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
                        <form ref="nomEditor" onSubmit={this.handleNomSubmit}>
                            <div className="form-group row">
                                <div className="col-xs-12">
                                    <input ref="title" className="form-control editor-title" type="text" placeholder="Title" />
                                </div>
                                <div className="col-xs-6">
                                    <input ref="hashtags" className="form-control editor-hashtags" type="text" placeholder="#hashtags" />
                                </div>
                                <div className="col-xs-3">
                                    {this.renderProjects()}
                                </div>
                                <div className="col-xs-3">
                                    {this.renderMilestones()}
                                </div>
                                <div className="col-xs-12">
                                    <textarea ref="body" className="form-control editor-body" placeholder="Say something" />
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="submit" className='btn btn-success'><FontAwesome name="thumbs-up" /> Publish</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
})

export default NewNomModal;
