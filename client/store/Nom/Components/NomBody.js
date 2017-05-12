import React from 'react';
import RenderMarkdown from '../../../components/RenderMarkdown/RenderMarkdown';

class NomDescription extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nom-body">
                <RenderMarkdown markdown={this.props.body} />
            </div>
        )
    }
}

export default NomDescription;
