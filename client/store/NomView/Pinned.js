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
    this.props.handleGetInbox();
    this.props.setSearchBar({
      defaultValue: "Pinned",
      class: "searchBar-pinned"
    });
  }

  render() {
    let { noms, settings } = this.props;
    let pinnedNoms = noms.filter(filterPinnedNoms);

    return (
      <div className="view-pinned">
        <ListNoms nomList={pinnedNoms} emptyNoms={settings.emptyNoms.pinned} {...this.props} />
      </div>
    )
  }
}

export default NomViewPinned;
