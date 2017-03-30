import React from 'react';
import FontAwesome from 'react-fontawesome';

class NewNomButton extends React.Component {
  constructor(props) {
    super(props);
  }

  openNomEditor() {
    this.props.toggleNomEditor(true);
    this.props.toggleNewNomButton(false);
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
