import React from 'react';
import NomList from '../../components/NomList/NomList';

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
        const title = (<span>#{this.props.params.tag}</span>)

        //set empty noms
        let emptyNoms = {
            img: settings.emptyNoms.tag.img,
            text: "Oh! #" + tag + " is empty!"
        }

        return (
            <div className="view-tag">
                <NomList nomList={taggedNoms} title={title} emptyNoms={emptyNoms} {...this.props} />
            </div>
        )
    }
}

export default NomViewTag;
