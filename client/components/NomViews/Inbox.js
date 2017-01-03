import React from 'react';
import ListNoms from '../ListNoms/ListNoms';

const NomViewInbox = React.createClass({
    render() {
        return (
          <div className="view-inbox">
            <ListNoms noms={this.props.noms} />
          </div>
        )
    }
})

export default NomViewInbox;
