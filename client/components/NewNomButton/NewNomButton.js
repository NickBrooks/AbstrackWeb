import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

class NewNomButton extends React.Component {
  constructor(props) {
    super(props);
  }

  openNomEditor() {
    browserHistory.push("/new/nom");
  }

  render() {
    return (
      <div className="new-nom-button">
        <button type="button" className="btn" onClick={this.openNomEditor.bind(this)}>
          <FontAwesome name="pencil" />
        </button>
      </div>
    )
  }
}

export default NewNomButton;
