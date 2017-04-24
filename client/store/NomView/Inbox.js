import React from 'react';
import ListNoms from '../../components/ListNoms/ListNoms';
import FontAwesome from 'react-fontawesome';

class NomViewInbox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setSearchBar({
      defaultValue: false,
      class: false
    });
  }

  render() {
    let { settings, handleGetInbox } = this.props;
    
    return (
      <div className="view-inbox">
        <ListNoms loadNomList={handleGetInbox} emptyNoms={settings.emptyNoms.inbox} {...this.props} />
      </div>
    )
  }
}

export default NomViewInbox;
