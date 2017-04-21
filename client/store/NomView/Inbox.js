import React from 'react';
import ListNoms from '../../components/ListNoms/ListNoms';

class NomViewInbox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.handleGetInbox();
  }

  render() {
    let { settings } = this.props;
    
    return (
      <div className="view-inbox">
        <ListNoms nomList={this.props.noms} emptyNoms={settings.emptyNoms.inbox} {...this.props} />
      </div>
    )
  }
}

export default NomViewInbox;
