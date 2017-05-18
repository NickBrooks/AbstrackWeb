import React from 'react';
import { setDocumentTitle } from '../../functions';
import NomList from '../../components/NomList/NomList';
import FontAwesome from 'react-fontawesome';

class NomViewInbox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setSearchBar({
      defaultValue: false,
      class: false
    });

    setDocumentTitle("Inbox");
  }

  componentWillUnmount() {
      setDocumentTitle();
  }

  render() {
    let { settings, handleGetInbox } = this.props;

    return (
      <div className="view-inbox">
        <NomList loadNomList={handleGetInbox} viewName="inbox" emptyNoms={settings.emptyNoms.inbox} {...this.props} />
      </div>
    )
  }
}

export default NomViewInbox;
