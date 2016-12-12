import React from 'react';
import FontAwesome from 'react-fontawesome';

const NomHeader = React.createClass({
    render() {
        return (
                <div className="nom-header">
                    <h3>{this.props.title} <span className="light"> <FontAwesome name="caret-down" /></span></h3>
                </div>
        )
    }
})

export default NomHeader;
