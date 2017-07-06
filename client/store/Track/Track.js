import React from 'react';
import FontAwesome from 'react-fontawesome';
import { setDocumentTitle } from '../../functions';
import NoteList from '../../components/NoteList/NoteList';
import moment from 'moment';

class Track extends React.Component {
  constructor(props) {
    super(props);
  }

  checkTrackExists(trackId) {
    const { handleGetTrack, tracks } = this.props;
    const i = tracks.findIndex((track) => track.id === trackId);

    // check if track exists in the store
    if (i == -1) {
      handleGetTrack(trackId);
    } else {
      const track = tracks[i].data;
      if (track === null || moment().subtract(60, 'seconds') > moment(track.timeFetched)) {
        handleGetTrack(trackId);
      }
    }
  }

  componentWillMount() {
    this.props.setSearchBar({
      defaultValue: "Track",
      class: "searchBar-track"
    });
    this.checkTrackExists(this.props.params.trackId);
  }

  componentWillUnmount() {
    this.props.setSearchBar({
      defaultValue: false,
      class: false
    });

    setDocumentTitle();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params != nextProps.params) {
      this.checkTrackExists(nextProps.params.trackId);
    }
  }

  renderLoading() {
    return (
      <h3>Loading...</h3>
    )
  }

  renderLoaded() {
    const { trackId } = this.props.params;
    const { handleGetNotes, tracks, settings } = this.props;
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
        <h3>{track.data.name}</h3>
        <h6>{track.data.description}</h6>
        <hr />
        <NoteList loadNoteList={handleGetNotes} query={query} viewName={view} emptyNotes={emptyNotes} {...this.props} />
      </div>
    )
  }

  render() {
    let { ui } = this.props;

    return (
      (ui.tracks.fetchingStatus ? this.renderLoading() : this.renderLoaded())
    )
  }
}

export default Track;
