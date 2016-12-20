import React from 'react';
import ListNoms from '../ListNoms/ListNoms';

//dummydata//dummy data
import Noms from '../../dummydata/Noms';

const NomViewInbox = React.createClass({
    render() {
        return (
          <div className="inbox">
            <ListNoms noms={Noms} />
          </div>
        )
    }
})

export default NomViewInbox;
