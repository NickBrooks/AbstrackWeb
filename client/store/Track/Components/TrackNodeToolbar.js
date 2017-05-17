import React from 'react';
import FontAwesome from 'react-fontawesome';
import { browserHistory } from 'react-router';

class TrackNodeToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleEditClick(e) {
        e.preventDefault();
        let { trackId } = this.props;
        browserHistory.push('/t/' + trackId + '/edit');
    }

    handleDeleteClick(e) {
        e.preventDefault();
        let { trackId } = this.props;
        browserHistory.push('/t/' + trackId + '/delete');
    }

    render() {

        return (
            <div className="btn-group toolbar node-toolbar" role="group">
                <object><button type="button" onClick={this.handleEditClick} aria-label="Edit Track" className="btn btn-sm btn-secondary"><FontAwesome name="pencil" /></button></object>
                <object><button type="button" onClick={this.handleDeleteClick} aria-label="Delete Track" className="btn btn-sm btn-secondary"><FontAwesome name="trash" /></button></object>
            </div>
        )
    }
}

export default TrackNodeToolbar;