import React from 'react';
import { setDocumentTitle } from '../../functions';
import NoteList from '../../components/NoteList/NoteList';
import FontAwesome from 'react-fontawesome';

class NoteViewDrafts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setSearchBar({
      defaultValue: "Drafts",
      class: "searchBar-drafts"
    });

    setDocumentTitle("Drafts");
  }

  componentWillUnmount() {
    this.props.setSearchBar({
      defaultValue: false,
      class: false
    });

    setDocumentTitle();
  }

  render() {
    let { notes, settings, handleGetDrafts } = this.props;

    return (
      <div className="view-drafts">
        <NoteList loadNoteList={handleGetDrafts} viewName="drafts" emptyNotes={settings.emptyNotes.drafts} {...this.props} />
      </div>
    )
  }
}

export default NoteViewDrafts;
