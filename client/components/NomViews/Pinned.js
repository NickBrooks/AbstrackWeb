import React from 'react';
import ListNoms from '../ListNoms/ListNoms';

function filterPinnedNoms(n) {
  return n.pinned == true;
}

class NomViewPinned extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {noms} = this.props;
    let pinnedNoms = noms.filter(filterPinnedNoms)
    return (
      <div className="view-pinned">
        <ListNoms noms={pinnedNoms} />
      </div>
    )
  }
}

export default NomViewPinned;
