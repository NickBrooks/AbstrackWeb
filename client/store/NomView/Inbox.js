import React from 'react';
import ListNoms from '../../components/NomDisplay/NomDisplay';

class NomViewInbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { settings } = this.props;
    
    return (
      <div className="view-inbox">
        <ListNoms noms={this.props.noms} emptyNoms={settings.emptyNoms.inbox} />
      </div>
    )
  }
}

export default NomViewInbox;
