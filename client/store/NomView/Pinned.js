import React from 'react';
import { setDocumentTitle } from '../../functions';
import NomList from '../../components/NomList/NomList';
import FontAwesome from 'react-fontawesome';

class NomViewPinned extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setSearchBar({
      defaultValue: "Pinned",
      class: "searchBar-pinned"
    });

    setDocumentTitle("Pinned");
  }

  componentWillUnmount() {
    this.props.setSearchBar({
      defaultValue: false,
      class: false
    });

    setDocumentTitle();
  }

  render() {
    let { noms, settings, handleGetPinned } = this.props;

    return (
      <div className="view-pinned">
        <NomList loadNomList={handleGetPinned} viewName="pinned" emptyNoms={settings.emptyNoms.pinned} {...this.props} />
      </div>
    )
  }
}

export default NomViewPinned;
