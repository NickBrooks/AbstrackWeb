import React from 'react';
import FontAwesome from 'react-fontawesome';
import { setDocumentTitle } from '../../functions';
import NoteList from '../../components/NoteList/NoteList';

class Track extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setSearchBar({
      defaultValue: "Track",
      class: "searchBar-track"
    });

  }

  componentWillUnmount() {
    this.props.setSearchBar({
      defaultValue: false,
      class: false
    });

    setDocumentTitle();
  }

  render() {
    const { trackId } = this.props.params;
    const { handleSearchNotes, tracks, settings } = this.props;
    const i = tracks.findIndex((track) => track.id === trackId);
    const track = tracks[i];
    const view = 't:"' + trackId + '"';
    setDocumentTitle(track.name);

    var query = {
      trackIds: [trackId]
    }

    //set empty notes
    let emptyNotes = {
      img: settings.emptyNotes.track.img,
      text: "Oh! " + track.name + " is empty!"
    }

    return (
      <div className="view-track">
        <h3>{track.name}</h3>
        <h6>{track.description}</h6>
        <hr />
        <NoteList loadNoteList={handleSearchNotes} query={query} viewName={view} emptyNotes={emptyNotes} {...this.props} />
      </div>
    )
  }
}

export default Track;
