import React from 'react';

const NomNode = React.createClass({
    render() {
        const { title, id } = this.props;
        return (
            <div id={id} className="nom-node">
                <p>{title}</p>
            </div>
        )
    }
})

export default NomNode;