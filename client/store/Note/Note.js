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
        const { notes } = this.props;

        // check if nom exists in the store
        const i = notes.findIndex((note) => note.id === noteId);
        console.log(i);
        if (i == -1) {
            this.props.handleGetNote(noteId);
        } else {
            const note = notes[i].data;

            if (note === null || moment().subtract(60, 'seconds') > moment(note.timeFetched)) {
                this.props.handleGetNote(noteId);
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
                    <Link to={accountLink}><Avatar user={note.createdBy} size="50" customClass="pull-left timeline" /></Link>
                    <div className="ibox view-note">
                        <NoteHeader note={note} {...this.props} />
                        <hr />
                        <NoteBody body={note.body} />
                    </div>
                    <Comments noteId={note.id} {...this.props} />
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
