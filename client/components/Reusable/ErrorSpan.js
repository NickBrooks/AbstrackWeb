import React from 'react';
import FontAwesome from 'react-fontawesome';

class ErrorSpan extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className="error"><FontAwesome name="exclamation-circle" /> {this.props.error}</span>
        )
    }
}

export default ErrorSpan;
