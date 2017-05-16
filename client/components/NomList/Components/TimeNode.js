import React from 'react';
import NomNode from './NomNode';

class TimeNode extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="time-node">
                <h5>{this.props.title}</h5>
                <ul className="list-unstyled node-list">
                    {this.props.filteredNoms.map((nom) => <NomNode key={nom.id} id={nom.id} {...this.props} />)}
                </ul>
            </div>
        )
    }
}

export default TimeNode;
