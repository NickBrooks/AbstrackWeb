import React from 'react';
import FontAwesome from 'react-fontawesome';
import Modal from 'react-bootstrap-modal';

const NewNomModal = React.createClass({
    closeModal() {
        this.setState(
            {
                open: false
            }
        )
    },
    render() {
        return (
            <div>
                <Modal show={true} onHide={this.closeModal} aria-labelledby="ModalHeader">
                    <Modal.Header closeButton>
                        <Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Some Content here</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className='btn btn-primary' onClick={this.closeModal}>Save</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
})

export default NewNomModal;
