import React from 'react';
import ListNoms from '../../components/ListNoms/ListNoms';

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
        let { tag } = this.props.params;
        let { noms, settings } = this.props;        
        let taggedNoms = noms.filter(filterTaggedNoms.bind(null, tag));

        //set empty noms
        let emptyNoms = {
            img: settings.emptyNoms.tag.img,
            text: "Oh! #" + tag + " is empty!"
        }

        return (
            <div className="view-tag">
                <h3>#{this.props.params.tag}</h3>
                <hr />
                <ListNoms noms={taggedNoms} emptyNoms={emptyNoms} />
            </div>
        )
    }
}

export default NomViewTag;
