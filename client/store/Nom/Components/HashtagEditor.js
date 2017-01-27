import React from 'react';
import HashtagSpan from '../../../components/HashtagSpan/HashtagSpan';
import Modal from 'react-bootstrap-modal';
import FontAwesome from 'react-fontawesome';

class HashtagEditor extends React.Component {
    constructor(props) {
        super(props);
        this.openHashtagEditor = this.openHashtagEditor.bind(this);
        this.state = {
            open: true
        };
    }

    openHashtagEditor(value) {
        if (value == true) {
            this.setState({open: true});
        }

        this.setState({open: false});
    }

    handleHashtagSubmit() {

    }

    renderHashtagEditor() {
        return (
            <div>
                <Modal show={this.state.open} onHide={() => this.openHashtagEditor(false)} aria-labelledby="ModalHeader" className="nom-editor">
                    <form ref="hashtagEditor" onSubmit={this.handleHashtagSubmit}>
                        <Modal.Body>
                            <div className="form-group row">
                                {this.props.hashtags.map((hashtag, i) => <p key={i}>{hashtag.name}</p>)}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <button type="submit" className='btn btn-success'><FontAwesome name="thumbs-up" /> Save</button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        );
    }

    render() {
        return (
            <div className="hashtags">
                {this.props.hashtags.map((hashtag, i) => <HashtagSpan {...this.props} hashtag={hashtag} customClass="default" key={i} i={i} />)}<FontAwesome name="plus" onClick={() => this.openHashtagEditor(true)} />
                {this.renderHashtagEditor()}
            </div>
        )
    }
}

export default HashtagEditor;
