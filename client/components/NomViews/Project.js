import React from 'react';
import ListNoms from '../ListNoms/ListNoms';

//dummydata//dummy data
import Noms from '../../dummydata/Noms';
import Projects from '../../dummydata/Projects';

const NomViewProject = React.createClass({
    filterProjectNoms: function(n) {
      if(typeof n.project != "undefined") {
        return n.project.id == this.props.params.projectId;
      }

      return;
    },
    render() {
        const { projectId } = this.props.params;
        const i = Projects.findIndex((project) => project.id === projectId);
        const project = Projects[i];

        let projectNoms = Noms.filter(this.filterProjectNoms);

        return (
          <div className="view-project">
            <h3>{project.name}</h3>
            <hr />
            <ListNoms noms={projectNoms} />
          </div>
        )
    }
})

export default NomViewProject;
