import React from 'react';
import ReactMarkdown from 'react-markdown';

const input = '# This is a header\n\nAnd this is a paragraph\n\n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")\n\nInline `code` has `back-ticks around` it.';

const NomDescription = React.createClass({
    render() {
        return (
            <div className="ibox">
                <div className="nom-description">
                    <ReactMarkdown source={input} />
                </div>
            </div>
        )
    }
})

export default NomDescription;