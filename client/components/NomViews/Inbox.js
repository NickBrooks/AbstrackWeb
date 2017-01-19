import React from 'react';
import ListNoms from '../ListNoms/ListNoms';

class NomViewInbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="view-inbox">
        <ListNoms noms={this.props.noms} />
      </div>
    )
  }
}

export default NomViewInbox;
