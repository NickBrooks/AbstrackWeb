import React from 'react';
import ReactMarkdown from 'react-markdown';

const NomDescription = React.createClass({
    render() {
        return (
                <div className="nom-body">
                    <ReactMarkdown source={this.props.body} />
                </div>
        )
    }
})

export default NomDescription;
