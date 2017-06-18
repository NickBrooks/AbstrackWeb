import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router";
import { setDocumentTitle } from '../../functions';
import EmptyContent from '../../components/EmptyContent/EmptyContent';
import TrackNodeToolbar from './components/TrackNodeToolbar';

class Tracks extends React.Component {
    constructor(props) {
        super(props);
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
                    <span className="fa-stack note-green-light"><FontAwesome name="circle" stack="2x" /><FontAwesome name="list-ul" inverse stack="1x" /></span> <span className="title">{track.name}</span> <span className="body">{track.description}</span>
                    <TrackNodeToolbar trackId={track.id} />
                </div>
            </li>
        )
    }

    componentWillMount() {
        this.props.setSearchBar({
            defaultValue: "Tracks",
            class: "searchBar-track"
        });

        setDocumentTitle("Tracks");
    }

    componentWillUnmount() {
        this.props.setSearchBar({
            defaultValue: false,
            class: false
        });

        setDocumentTitle();
    }

    render() {
        let { tracks } = this.props;
        var emptyContent = {
            text: "Your tracks are empty, create one.",
            img: "https://i.imgur.com/9uC4oct.png"
        };

        return (
            <div className="track-list">
                <h4><Link to="/tracks"><span className="fa-stack note-green-light"><FontAwesome name="circle" stack="2x" /><FontAwesome name="list-ul" inverse stack="1x" /></span></Link> Tracks ({tracks.length}) <Link to="/new/track"><FontAwesome name="plus" className="note-green-light" /></Link></h4>
                <hr />
                {tracks == null || tracks.length == 0 ? <EmptyContent emptyContent={emptyContent} /> : this.renderTracks()}
            </div>
        )
    }
}

export default Tracks;