import React from 'react';
import { setDocumentTitle } from '../../functions';
import NoteList from '../../components/NoteList/NoteList';
import { conformHashtags } from '../../functions';

class NoteViewTag extends React.Component {
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

        setDocumentTitle(tagString);
    }

    componentWillUnmount() {
        setDocumentTitle();
    }

    render() {
        let { settings, handleSearchNotes } = this.props;
        let { tags } = this.props.params;

        // just make sure some tags have been provided
        if (tags == undefined) return null;

        const tagList = conformHashtags(tags);
        const tagString = this.generateHashtagString(tagList);

        // set empty notes
        let emptyNotes = {
            img: settings.emptyNotes.tag.img,
            text: "Oh! " + this.generateHashtagString(tagList) + " is empty!"
        }

        var query = {
            hashtags: tagList
        }

        return (
            <div className="view-tag">
                <NoteList loadNoteList={handleSearchNotes} query={query} viewName={tagString} emptyNotes={emptyNotes} {...this.props} />
            </div>
        )
    }
}

export default NoteViewTag;
