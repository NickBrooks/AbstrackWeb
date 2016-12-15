import React from 'react';
import NomNode from './NomNode';

// Dummy Data
import ListOfNoms from '../../dummydata/ListOfNoms';

const ListNoms = React.createClass({
    render() {
        return (
          <div className="nom-list">
            <div className="time-node">
              <h6>Today</h6>
              <ul>
                  {ListOfNoms.noms.map((nom) => <NomNode {...nom} key={nom.id} id={nom.id} />)}
              </ul>
            </div>
            <div className="time-node">
              <h6>This month</h6>
              <ul>
                  {ListOfNoms.noms.map((nom) => <NomNode {...nom} key={nom.id} id={nom.id} />)}
              </ul>
            </div>
            <div className="time-node">
              <h6>Older</h6>
              <ul>
                  {ListOfNoms.noms.map((nom) => <NomNode {...nom} key={nom.id} id={nom.id} />)}
              </ul>
            </div>
          </div>
        )
    }
})

export default ListNoms;
