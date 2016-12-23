import React from 'react';
import FontAwesome from 'react-fontawesome';

const NewNomButton = React.createClass({
    openNewNomModal() {
      alert('this worked');
    },
    render() {
        return (
          <div className="new-nom-button">
            <button type="button" className="btn" onClick={this.openNewNomModal}>
              <FontAwesome name="pencil" />
            </button>
          </div>
        )
    }
})

export default NewNomButton;
