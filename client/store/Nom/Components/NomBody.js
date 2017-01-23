import React from 'react';
import ReactMarkdown from 'react-markdown';

class NomDescription extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nom-body">
                <ReactMarkdown source={this.props.body} />
            </div>
        )
    }
}

export default NomDescription;
