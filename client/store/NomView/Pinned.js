import React from 'react';
import ListNoms from '../../components/ListNoms/ListNoms';
import FontAwesome from 'react-fontawesome';

function filterPinnedNoms(n) {
  return n.pinned == true;
}

class NomViewPinned extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setSearchBar({
      defaultValue: "Pinned",
      class: "searchBar-pinned"
    });
  }

  componentWillUnmount() {
    this.props.setSearchBar({
      defaultValue: "Search noms",
      class: "searchBar-inbox"
    });
  }

  render() {
    let { noms, settings, handleGetInbox } = this.props;

    return (
      <div className="view-pinned">
        <ListNoms loadNomList={handleGetInbox} emptyNoms={settings.emptyNoms.pinned} {...this.props} />
      </div>
    )
  }
}

export default NomViewPinned;
