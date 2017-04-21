import React from 'react';
import FontAwesome from 'react-fontawesome';
import ListNoms from '../../components/ListNoms/ListNoms';

function filterMilestoneNoms(milestoneId, n) {
  if (typeof n.milestone != "undefined") {
    return n.milestone.id == milestoneId;
  }

  return;
}

class NomViewMilestone extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { milestoneId } = this.props.params;
    const {milestones, tracks, noms, settings} = this.props;
    const milestoneIndex = milestones.findIndex((milestone) => milestone.id === milestoneId);
    const milestone = milestones[milestoneIndex];
    const trackIndex = tracks.findIndex((track) => track.id === milestone.track.id);
    const track = tracks[trackIndex];

    let milestoneNoms = noms.filter(filterMilestoneNoms.bind(null, milestoneId));

    //set empty noms
    let emptyNoms = {
      img: settings.emptyNoms.milestone.img,
      text: "Oh! " + milestone.name + " is empty!"
    }

    return (
      <div className="view-milestone">
        <h3><FontAwesome name="calendar-o" /> {milestone.name}</h3>
        <p>{milestone.description}</p>
        <div className="text-xs-center">{milestone.percent_complete}%</div>
        <progress className="progress progress-success" value={milestone.percent_complete} max="100"></progress>
        <hr />
        <ListNoms nomList={milestoneNoms} emptyNoms={emptyNoms} {...this.props} />
      </div>
    )
  }
}

export default NomViewMilestone;
