import React from 'react';
import FontAwesome from 'react-fontawesome';
import NomList from '../../components/NomList/NomList';

class NomViewTrack extends React.Component {
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
  }

  render() {
    const { trackId } = this.props.params;
    const { handleSearchNoms, tracks, settings } = this.props;
    const i = tracks.findIndex((track) => track.id === trackId);
    const track = tracks[i];
    const view = 't:"' + track.name + '"';

    var query = {
      trackIds: [trackId]
    }

    //set empty noms
    let emptyNoms = {
      img: settings.emptyNoms.track.img,
      text: "Oh! " + track.name + " is empty!"
    }

    return (
      <div className="view-track">
        <h3>{track.name}</h3>
        <h6>{track.description}</h6>
        <hr />
        <NomList loadNomList={handleSearchNoms} query={query} viewName={view} emptyNoms={emptyNoms} {...this.props} />
      </div>
    )
  }
}

export default NomViewTrack;
