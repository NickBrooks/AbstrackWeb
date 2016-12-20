import React from 'react';
import ListNoms from '../ListNoms/ListNoms';

//dummydata//dummy data
import Noms from '../../dummydata/Noms';

function filterPinnedNoms(n) {
  return n.pinned == true;
}

const NomViewPinned = React.createClass({
    render() {
        let pinnedNoms = Noms.filter(filterPinnedNoms)
        return (
          <div className="pinned">
            <ListNoms noms={pinnedNoms} />
          </div>
        )
    }
})

export default NomViewPinned;
