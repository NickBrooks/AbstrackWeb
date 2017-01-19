import React from 'react';
import ListNoms from '../ListNoms/ListNoms';

function inArray(needle, haystack) {
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle) return true;
    }
    return false;
}

function filterTaggedNoms(tag, n) {
    return inArray(tag, n.hashtags);
}

class NomViewTag extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { noms } = this.props;
        let { tag } = this.props.params;
        let taggedNoms = noms.filter(filterTaggedNoms.bind(null, tag));
        return (
            <div className="view-tag">
                <h3>#{this.props.params.tag}</h3>
                <hr />
                <ListNoms noms={taggedNoms} />
            </div>
        )
    }
}

export default NomViewTag;
