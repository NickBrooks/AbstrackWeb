import React from 'react';
import HashtagSpan from '../../../components/HashtagSpan/HashtagSpan';
import { conformHashtags } from '../../../functions/functions';
import Modal from 'react-bootstrap-modal';
import FontAwesome from 'react-fontawesome';

class HashtagEditor extends React.Component {
    constructor(props) {
        super(props);
        this.openHashtagEditor = this.openHashtagEditor.bind(this);
        this.handleHashtagSubmit = this.handleHashtagSubmit.bind(this);
        this.state = {
            open: false
        };
    }

    openHashtagEditor(value) {
        if (value === true) {
            this.setState({ open: true });
        }
        else {
            this.setState({ open: false });
        }
    }

    handleHashtagSubmit(e) {
        e.preventDefault();

        //conform hashtag
        var hashtags = conformHashtags(this.refs.hashtags.value);

        //add it
        this.props.addHashtagToNom(hashtags, this.props.nomId);
        this.refs.hashtagEditor.reset();
    }

    renderHashtagEditor() {
        return (
            <div>
                <Modal show={this.state.open} onHide={() => this.openHashtagEditor(false)} aria-labelledby="ModalHeader" className="sm hashtag-editor">
                    <form ref="hashtagEditor" onSubmit={this.handleHashtagSubmit}>
                        <Modal.Header>
                            <Modal.Title id='ModalHeader'>
                                #hashtag editor
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                {this.props.hashtags.map((hashtag, i) => <h5 key={i}><FontAwesome name="times" className="btn-delete-hashtag" /> <span className="tag tag-default hashtag">#{hashtag}</span></h5>)}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <input type="text" ref="hashtags" className="form-control" placeholder="Add #hashtag" />
                            <input type="submit" hidden />
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
