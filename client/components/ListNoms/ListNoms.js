import React from 'react';
import NomNode from './NomNode';

// Dummy Data
import DummyListOfNoms from '../../dummydata/DummyListOfNoms';

const ListNoms = React.createClass({
    render() {
        return (
            <ul className="nom-list">
                {DummyListOfNoms.noms.map((nom) => <NomNode {...nom} key={nom.id} id={nom.id} />)}
            </ul>
        )
    }
})

export default ListNoms;