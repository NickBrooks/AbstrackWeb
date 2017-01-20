import React from 'react';
import ListNoms from '../ListNoms/ListNoms';
import FontAwesome from 'react-fontawesome';

function filterPinnedNoms(n) {
  return n.pinned == true;
}

class NomViewPinned extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {noms, settings} = this.props;
    let pinnedNoms = noms.filter(filterPinnedNoms)
    
    return (
      <div className="view-pinned">
        <h3 className="pinned"><FontAwesome name="thumb-tack" /> Pinned</h3>
        <hr />
        <ListNoms noms={pinnedNoms} emptyNoms={settings.emptyNoms.pinned} />
      </div>
    )
  }
}

export default NomViewPinned;
