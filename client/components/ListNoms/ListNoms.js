import React from 'react';
import NomNode from './NomNode';

// Dummy Data
import Noms from '../../dummydata/Noms';

const ListNoms = React.createClass({
    render() {
        return (
          <div className="nom-list">
            <div className="time-node">
              <h6>Today</h6>
              <ul>
                  {Noms.map((nom) => <NomNode {...nom} key={nom.id} id={nom.id} />)}
              </ul>
            </div>
            <div className="time-node">
              <h6>This month</h6>
              <ul>
                  {Noms.map((nom) => <NomNode {...nom} key={nom.id} id={nom.id} />)}
              </ul>
            </div>
            <div className="time-node">
              <h6>Older</h6>
              <ul>
                  {Noms.map((nom) => <NomNode {...nom} key={nom.id} id={nom.id} />)}
              </ul>
            </div>
          </div>
        )
    }
})

export default ListNoms;
