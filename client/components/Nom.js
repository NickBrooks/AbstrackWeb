import React from 'react';

const Nom = React.createClass({
    render() {
        const { nomId } = this.props.params;

        return (
            <div className="nom">
                <p>{nomId}</p>
            </div>
        )
    }
});

export default Nom;