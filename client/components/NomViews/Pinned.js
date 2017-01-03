import React from 'react';
import ListNoms from '../ListNoms/ListNoms';

function filterPinnedNoms(n) {
  return n.pinned == true;
}

const NomViewPinned = React.createClass({  
    render() {
        let {noms} = this.props;
        let pinnedNoms = noms.filter(filterPinnedNoms)
        return (
          <div className="view-pinned">
            <ListNoms noms={pinnedNoms} />
          </div>
        )
    }
})

export default NomViewPinned;
