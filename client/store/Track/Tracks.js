import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router";

class Tracks extends React.Component {
    constructor(props) {
        super(props);
    }

    renderEmptyTracks() {
        return (
            <div>
                Your tracks are empty, create one.
            </div>
        )
    }

    renderTracks() {
        let { tracks } = this.props;

        return (
            <ul className="list-unstyled node-list">
                {tracks.map((track) => <Link to={"/t/" + track.id} key={track.id} id={track.id}>{this.renderTrack(track)}</Link>)}
            </ul>
        )
    }

    renderTrack(track) {
        return (
            <li>
                <div className="quick-info text-truncate">
                    <span className="fa-stack nom-green"><FontAwesome name="circle" stack="2x" /><FontAwesome name="list-ul" inverse stack="1x" /></span> <span className="title">{track.name}</span> <span className="body">{track.description}</span>
                </div>
            </li>
        )
    }

    componentWillMount() {
        this.props.setSearchBar({
            defaultValue: "Tracks",
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
        let { tracks } = this.props;
        return (
            <div className="track-list">
                <h3>Tracks ({tracks.length})</h3>
                <hr />
                {tracks == null || tracks.length == 0 ? this.renderEmptyTracks() : this.renderTracks()}
            </div>
        )
    }
}

export default Tracks;