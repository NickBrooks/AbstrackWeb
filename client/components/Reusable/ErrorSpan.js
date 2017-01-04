import React from 'react';
import FontAwesome from 'react-fontawesome';

const ErrorSpan = React.createClass({
    render() {
        return (
            <span className="error"><FontAwesome name="exclamation-circle" /> {this.props.error}</span>
        )
    }
})

export default ErrorSpan;
