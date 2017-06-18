import React from 'react';
import { setDocumentTitle } from '../../functions';
import NoteList from '../../components/NoteList/NoteList';
import FontAwesome from 'react-fontawesome';

class NoteViewPinned extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setSearchBar({
      defaultValue: "Pinned",
      class: "searchBar-pinned"
    });

    setDocumentTitle("Pinned");
  }

  componentWillUnmount() {
    this.props.setSearchBar({
      defaultValue: false,
      class: false
    });

    setDocumentTitle();
  }

  render() {
    let { notes, settings, handleGetPinned } = this.props;

    return (
      <div className="view-pinned">
        <NoteList loadNoteList={handleGetPinned} viewName="pinned" emptyNotes={settings.emptyNotes.pinned} {...this.props} />
      </div>
    )
  }
}

export default NoteViewPinned;
