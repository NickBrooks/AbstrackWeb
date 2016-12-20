import React from 'react';
import ListNoms from '../ListNoms/ListNoms';

//dummydata//dummy data
import Noms from '../../dummydata/Noms';

function inArray(needle, haystack) {
    for(var i = 0; i < haystack.length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}

const NomViewTag = React.createClass({
    filterTaggedNoms: function(n) {
      return inArray(this.props.params.tag, n.hashtags);
    },
    render() {
        let taggedNoms = Noms.filter(this.filterTaggedNoms)
        return (
          <div className="view-tag">
            <h3>#{this.props.params.tag}</h3>
            <hr />
            <ListNoms noms={taggedNoms} />
          </div>
        )
    }
})

export default NomViewTag;
