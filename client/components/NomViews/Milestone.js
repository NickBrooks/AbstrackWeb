import React from 'react';
import FontAwesome from 'react-fontawesome';
import ListNoms from '../ListNoms/ListNoms';

//dummydata//dummy data
import Noms from '../../dummydata/Noms';
import Milestones from '../../dummydata/Milestones';
import Projects from '../../dummydata/Projects';

const NomViewMilestone = React.createClass({
    filterMilestoneNoms: function(n) {
      if(typeof n.milestone != "undefined") {
        return n.milestone.id == this.props.params.milestoneId;
      }

      return;
    },
    render() {
        const { milestoneId } = this.props.params;
        const milestoneIndex = Milestones.findIndex((milestone) => milestone.id === milestoneId);
        const milestone = Milestones[milestoneIndex];
        const projectIndex = Projects.findIndex((project) => project.id === milestone.project.id);
        const project = Projects[projectIndex];

        let milestoneNoms = Noms.filter(this.filterMilestoneNoms);

        return (
          <div className="view-milestone">
            <h3><FontAwesome name="calendar-o" /> {milestone.name}</h3>
            <p>{milestone.description}</p>
            <div className="text-xs-center">{milestone.percent_complete}%</div>
            <progress className="progress progress-success" value={milestone.percent_complete} max="100"></progress>
            <hr />
            <ListNoms noms={milestoneNoms} />
          </div>
        )
    }
})

export default NomViewMilestone;
