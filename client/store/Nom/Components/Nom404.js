import React from 'react';
import { Link } from 'react-router';

class Nom404 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="empty-content">
                <img src="https://i.imgur.com/Z4KenpG.png" alt="Nom doesn't exist" />
                <h4>This nom doesn't exist, sniff :(</h4>
                <small><Link to="/new/nom">Create one?</Link></small>
            </div>
        )
    }
}

export default Nom404;
