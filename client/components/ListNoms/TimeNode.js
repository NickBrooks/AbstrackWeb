import React from 'react';
import NomNode from './NomNode';

class TimeNode extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="time-node">
                <h6>{this.props.title}</h6>
                <ul>
                    {this.props.noms.map((nom) => <NomNode {...nom} key={nom.id} id={nom.id} />)}
                </ul>
            </div>
        )
    }
}

export default TimeNode;
