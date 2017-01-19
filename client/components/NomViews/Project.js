import React from 'react';
import FontAwesome from 'react-fontawesome';
import ListNoms from '../ListNoms/ListNoms';

function filterProjectNoms(projectId, n) {
  if (typeof n.project != "undefined") {
    return n.project.id == projectId;
  }

  return;
}

class NomViewProject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { projectId } = this.props.params;
    const { noms, projects } = this.props;
    const i = projects.findIndex((project) => project.id === projectId);
    const project = projects[i];

    let projectNoms = noms.filter(filterProjectNoms.bind(null, projectId))

    return (
      <div className="view-project">
        <h3><FontAwesome name="bookmark" style={{ color: "#638495" }} /> {project.name}</h3>
        <h6><span className="tag tag-success"><FontAwesome name="lock" /> {project.visibility}</span></h6>
        <hr />
        <ListNoms noms={projectNoms} />
      </div>
    )
  }
}

export default NomViewProject;
