import React from 'react';
import FontAwesome from 'react-fontawesome';

const NewNomButton = React.createClass({
    render() {
        return (
          <div className="new-nom-button">
            <button type="button" className="btn">
              <FontAwesome name="pencil" />
            </button>
          </div>
        )
    }
})

export default NewNomButton;
