//libraries
import React from 'react';
import Modal from 'react-bootstrap-modal';
import FontAwesome from 'react-fontawesome';
import { Typeahead } from 'react-typeahead';

//components
import HashtagSpan from '../../../components/HashtagSpan/HashtagSpan';
import { conformHashtags } from '../../../functions/functions';

class HashtagEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleHashtagSubmit = this.handleHashtagSubmit.bind(this);
        this.handleHashtagRemove = this.handleHashtagRemove.bind(this);
        this.handleTypeaheadClick = this.handleTypeaheadClick.bind(this);
        this.state = {
            open: false
        };
    }

    handleTypeaheadClick(value) {
        //conform hashtag
        var hashtags = conformHashtags(value.hashtag);

        //add it
        this.props.addHashtagToNom(hashtags, this.props.nomId);
        this.refs.hashtagTypeahead.setState({
            entryValue: '',
            selection: null,
            selectionIndex: null,
            showResults: true,
            visible: []
        });
    }

    handleHashtagSubmit(e) {
        e.preventDefault();

        //conform hashtag
        var hashtags = conformHashtags(this.refs.hashtagTypeahead.state.entryValue);

        //add it
        this.props.addHashtagToNom(hashtags, this.props.nomId);
        this.refs.hashtagTypeahead.setState({
            entryValue: '',
            selection: null,
            selectionIndex: null,
            showResults: true,
            visible: []
        });
    }

    handleHashtagRemove(hashtag) {
        var hashtags = [hashtag];
        this.props.removeHashtagsFromNom(hashtags, this.props.nomId);
    }

    renderHashtagEditor() {
        var displayOption = function (option) {
            return "#" + option.hashtag;
        };

        return (
            <div>
                <Modal show={this.state.open} onHide={() => this.setState({ open: false })} aria-labelledby="ModalHeader" className="sm hashtag-editor">
                    <form ref="hashtagEditor" onSubmit={this.handleHashtagSubmit}>
                        <Modal.Header>
                            <Modal.Title id='ModalHeader'>
                                #hashtag editor
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                {this.props.hashtags.map((hashtag, i) => <h5 key={i}>
                                    <FontAwesome name="times" className="btn-delete-hashtag" onClick={() => this.handleHashtagRemove(hashtag)} /> <span className="tag tag-default hashtag">#{hashtag}</span>
                                </h5>)}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Typeahead ref="hashtagTypeahead"
                                options={this.props.hashtagList}
                                filterOption="hashtag"
                                displayOption={displayOption}
                                className="hashtag-typeahead"
                                placeholder="Add #hashtags"
                                maxVisible={8}
                                onOptionSelected={this.handleTypeaheadClick}
                                customClasses={{
                                    input: "form-control"
                                }}
                                />
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
                {this.props.hashtags.map((hashtag, i) => <HashtagSpan {...this.props} hashtag={hashtag} customClass="default" key={i} i={i} />)}<FontAwesome name="plus" onClick={() => this.setState({ open: true })} />
                {this.renderHashtagEditor()}
            </div>
        )
    }
}

export default HashtagEditor;
