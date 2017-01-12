import React from 'react';
import FontAwesome from 'react-fontawesome';
import Modal from 'react-bootstrap-modal';

const NewNomModal = React.createClass({
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
                        <div className="form-group">
                            <input className="form-control editor-title" type="text" placeholder="Title" />
                            <input className="form-control editor-hashtags" type="text" placeholder="#hashtags" />
                            <textarea className="form-control editor-body" placeholder="Say something" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-success' onClick={this.closeModal}>Publish</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
})

export default NewNomModal;
