import React from 'react';
import FontAwesome from 'react-fontawesome';
import ListNoms from '../ListNoms/ListNoms';

//dummydata//dummy data
import Noms from '../../dummydata/Noms';
import Milestones from '../../dummydata/Milestones';

const NomViewMilestone = React.createClass({
    filterMilestoneNoms: function(n) {
      if(typeof n.milestone != "undefined") {
        return n.milestone.id == this.props.params.milestoneId;
      }

      return;
    },
    render() {
        const { milestoneId } = this.props.params;
        const i = Milestones.findIndex((milestone) => milestone.id === milestoneId);
        const milestone = Milestones[i];

        let milestoneNoms = Noms.filter(this.filterMilestoneNoms);

        return (
          <div className="view-milestone">
            <h3><FontAwesome name="calendar-o" style={{color: "#638495"}}/> {milestone.name}</h3>
            <hr />
            <ListNoms noms={milestoneNoms} />
          </div>
        )
    }
})

export default NomViewMilestone;
