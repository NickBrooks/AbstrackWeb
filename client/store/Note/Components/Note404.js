import React from 'react';
import { Link } from 'react-router';

class Note404 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="empty-content">
                <img src="https://i.imgur.com/Z4KenpG.png" alt="Note doesn't exist" />
                <h4>This note doesn't exist, sniff :(</h4>
                <small><Link to="/new/note">Create one?</Link></small>
            </div>
        )
    }
}

export default Note404;
