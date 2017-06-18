import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

class NewNoteButton extends React.Component {
  constructor(props) {
    super(props);
  }

  openNoteEditor() {
    browserHistory.push("/new/note");
  }

  render() {
    return (
      <div className="new-note-button">
        <button type="button" className="btn" onClick={this.openNoteEditor.bind(this)}>
          <FontAwesome name="pencil" />
        </button>
      </div>
    )
  }
}

export default NewNoteButton;
