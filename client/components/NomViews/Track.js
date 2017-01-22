import React from 'react';
import FontAwesome from 'react-fontawesome';
import ListNoms from '../ListNoms/ListNoms';

function filterTrackNoms(trackId, n) {
  if (typeof n.track != "undefined") {
    return n.track.id == trackId;
  }

  return;
}

class NomViewTrack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { trackId } = this.props.params;
    const { noms, tracks, settings } = this.props;
    const i = tracks.findIndex((track) => track.id === trackId);
    const track = tracks[i];

    let trackNoms = noms.filter(filterTrackNoms.bind(null, trackId))

    //set empty noms
    let emptyNoms = {
      img: settings.emptyNoms.track.img,
      text: "Oh! " + track.name + " is empty!"
    }

    return (
      <div className="view-track">
        <h3><FontAwesome name="bookmark" style={{ color: "#638495" }} /> {track.name}</h3>
        <h6><span className="tag tag-success"><FontAwesome name="lock" /> {track.visibility}</span></h6>
        <hr />
        <ListNoms noms={trackNoms} emptyNoms={emptyNoms} />
      </div>
    )
  }
}

export default NomViewTrack;
