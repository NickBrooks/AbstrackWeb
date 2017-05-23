import React from 'react';
import { setDocumentTitle } from '../../functions';
import NomList from '../../components/NomList/NomList';
import FontAwesome from 'react-fontawesome';

class NomViewDrafts extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setSearchBar({
      defaultValue: "Drafts",
      class: "searchBar-drafts"
    });

    setDocumentTitle("Drafts");
  }

  componentWillUnmount() {
    this.props.setSearchBar({
      defaultValue: false,
      class: false
    });

    setDocumentTitle();
  }

  render() {
    let { noms, settings, handleGetDrafts } = this.props;

    return (
      <div className="view-drafts">
        <NomList loadNomList={handleGetDrafts} viewName="drafts" emptyNoms={settings.emptyNoms.drafts} {...this.props} />
      </div>
    )
  }
}

export default NomViewDrafts;
