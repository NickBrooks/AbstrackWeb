import React from 'react';
import NomList from '../../components/NomList/NomList';
import { conformHashtags } from '../../functions';

class NomViewTag extends React.Component {
    constructor(props) {
        super(props);
    }

    generateHashtagString(tags) {
        var newTags = tags.map(tag => {
            return "#" + tag;
        });

        return newTags.join(", ");
    }

    componentWillMount() {
        let { tags } = this.props.params;

        // just make sure some tags have been provided
        if (tags == undefined) {
            this.props.setSearchBar({
                defaultValue: false,
                class: false
            });
        }

        const tagList = conformHashtags(tags);
        const tagString = this.generateHashtagString(tagList);

        this.props.setSearchBar({
            defaultValue: tagString,
            class: false
        });
    }

    render() {
        let { settings, handleSearchNoms } = this.props;
        let { tags } = this.props.params;

        // just make sure some tags have been provided
        if (tags == undefined) return null;

        const tagList = conformHashtags(tags);
        const tagString = this.generateHashtagString(tagList);

        // set empty noms
        let emptyNoms = {
            img: settings.emptyNoms.tag.img,
            text: "Oh! " + this.generateHashtagString(tagList) + " is empty!"
        }

        var query = {
            hashtags: tagList
        }

        return (
            <div className="view-tag">
                <NomList loadNomList={handleSearchNoms} query={query} viewName={tagString} emptyNoms={emptyNoms} {...this.props} />
            </div>
        )
    }
}

export default NomViewTag;
