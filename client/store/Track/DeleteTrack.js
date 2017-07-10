import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router";
import { setDocumentTitle } from '../../functions';
import SaveStatusLabel from '../../components/SaveStatusLabel';

class DeleteTrack extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyChange = this.handleKeyChange.bind(this);
        this.handleSubmitDeleteTrack = this.handleSubmitDeleteTrack.bind(this);

        let { trackId } = this.props.params;
        let { tracks, ui } = this.props;
        const i = tracks.findIndex((track) => track.id === trackId);
        const track = tracks[i];

        this.state = {
            name: track.data.name,
            inputName: ""
        }
    }

    handleKeyChange(key, e) {
        var newState = this.state;
        newState[key] = e.target.value;
        this.setState(newState);
    }

    handleSubmitDeleteTrack(e) {
        e.preventDefault();
        let { handleDeleteTrack, params } = this.props;
        handleDeleteTrack(params.trackId);
    }

    componentWillMount() {
        this.props.setSearchBar({
            defaultValue: "Delete Track",
            class: "searchBar-track"
        });

        setDocumentTitle("Delete Track")
    }

    componentWillUnmount() {
        this.props.setSearchBar({
            defaultValue: false,
            class: false
        });

        setDocumentTitle();
    }

    render() {
        let { name, inputName } = this.state;
        let { trackId } = this.props.params;
        let { tracks, ui } = this.props;
        const i = tracks.findIndex((track) => track.id === trackId);
        const track = tracks[i];

        return (
            <div className="track-list">
                <h4><Link to="/tracks"><span className="fa-stack note-green-light"><FontAwesome name="circle" stack="2x" /><FontAwesome name="list-ul" inverse stack="1x" /></span></Link> Delete: "{name}"</h4>
                <hr />
                <div className="ibox">
                    <form ref="deleteTrack" autoComplete="off" onSubmit={this.handleSubmitDeleteTrack}>
                        <p><FontAwesome name="exclamation-triangle" /> {ui.tracks.deleteTrackWarning}</p>
                        <div className="form-group">
                            <input type="text" ref="name" className="form-control" placeholder="Enter track name to delete" onChange={this.handleKeyChange.bind(null, "inputName")} />
                        </div>
                        <hr />
                        <div className="form-group">
                            <button type="submit" className="btn btn-danger pull-right" disabled={name != inputName ? "disabled" : false}><FontAwesome name="check" /> Delete track</button> <SaveStatusLabel status={ui.updateStatus} />
                        </div>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        )
    }
}

export default DeleteTrack;