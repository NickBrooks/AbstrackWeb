import React from 'react';
import FontAwesome from 'react-fontawesome';

class NewNomButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="new-nom-button">
        <button type="button" className="btn" onClick={this.props.toggleNomEditor.bind(null, true)}>
          <FontAwesome name="pencil" />
        </button>
      </div>
    )
  }
}

export default NewNomButton;
