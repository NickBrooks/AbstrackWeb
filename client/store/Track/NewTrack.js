import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router";

class NewTrack extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.setSearchBar({
            defaultValue: "New Track",
            class: "searchBar-track"
        });
    }

    componentWillUnmount() {
        this.props.setSearchBar({
            defaultValue: false,
            class: false
        });
    }

    render() {
        return (
            <div className="track-list">
                <h4><Link to="/tracks"><span className="fa-stack nom-green-light"><FontAwesome name="circle" stack="2x" /><FontAwesome name="list-ul" inverse stack="1x" /></span></Link> Create a new track</h4>
                <hr />
            </div>
        )
    }
}

export default NewTrack;