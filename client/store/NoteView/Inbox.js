import React from 'react';
import { setDocumentTitle } from '../../functions';
import NoteList from '../../components/NoteList/NoteList';
import FontAwesome from 'react-fontawesome';

class NoteViewInbox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setSearchBar({
      defaultValue: false,
      class: false
    });

    setDocumentTitle("Inbox");
  }

  componentWillUnmount() {
      setDocumentTitle();
  }

  render() {
    let { settings, handleGetInbox } = this.props;

    return (
      <div className="view-inbox">
        <NoteList loadNoteList={handleGetInbox} viewName="inbox" emptyNotes={settings.emptyNotes.inbox} {...this.props} />
      </div>
    )
  }
}

export default NoteViewInbox;
