import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { setDocumentTitle } from '../../functions';
import moment from 'moment';
import NoteBody from './Components/NoteBody';
import NoteHeader from './Components/NoteHeader';
import Avatar from '../../components/Avatar/Avatar';
import Comments from '../Comment/Comments';
import Note404 from './Components/Note404';

class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    checkNoteExists(noteId) {
        const { handleGetNote, notes } = this.props;
        const i = notes.findIndex((note) => note.id === noteId);

        // check if nom exists in the store
        if (i == -1) {
            handleGetNote(noteId);
        } else {
            const note = notes[i].data;

            if (note === null || moment().subtract(60, 'seconds') > moment(note.timeFetched)) {
                handleGetNote(noteId);
            }
        }
    }

    componentWillMount() {
        this.checkNoteExists(this.props.params.noteId);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.params != nextProps.params) {
            this.checkNoteExists(nextProps.params.noteId);
        }
    }

    componentWillUnmount() {
        setDocumentTitle();
    }

    renderLoading() {
        return (
            <h3>Loading...</h3>
        )
    }

    renderLoaded() {
        const { noteId } = this.props.params;
        const { notes } = this.props;
        const i = notes.findIndex((note) => note.id === noteId);
        if (i === -1) {
            return (
                <Note404 />
            )
        }

        const note = notes[i].data;
        setDocumentTitle(note.title);
        const accountLink = "/u/" + note.createdBy.id;

        return (
            <div className="row core-body">
                <div className="col-sm-12">
                    <NoteHeader note={note} {...this.props} />
                    <div className="ibox view-note">
                        <NoteBody body={note.body} />
                    </div>
                    {/* <Comments noteId={note.id} {...this.props} /> */}
                </div>
            </div>
        )
    }

    render() {
        let { ui } = this.props;

        return (
            (ui.note.fetchingStatus ? this.renderLoading() : this.renderLoaded())
        )
    }
}

export default Note;
