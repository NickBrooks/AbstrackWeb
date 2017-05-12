import React from 'react';
import marked from 'marked';
import highlightjs from 'highlightjs';

marked.setOptions({
    highlight: function (code) {
        return highlightjs.highlightAuto(code).value;
    }
});

class RenderMarkdown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { markdown } = this.props;

        return (
            <div className="markdown" dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
        )
    }
}

export default RenderMarkdown;
