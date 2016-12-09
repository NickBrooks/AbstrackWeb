import React from 'react';
import ReactMarkdown from 'react-markdown';

const NomDescription = React.createClass({
    render() {
        return (
            <div className="ibox">
                <div className="nom-description">
                    <ReactMarkdown source={this.props.body} />
                </div>
            </div>
        )
    }
})

export default NomDescription;