import React from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router";
import { setDocumentTitle } from '../../functions';
import SaveStatusLabel from '../../components/SaveStatusLabel';

class NewTrack extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyChange = this.handleKeyChange.bind(this);
        this.handleSubmitAddTrack = this.handleSubmitAddTrack.bind(this);


        const maxLength = {
            name: 60,
            description: 140
        };

        this.state = {
            maxLength,
            nameCount: null
        }
    }

    handleKeyChange(key, e) {
        var newState = this.state;
        newState[key] = e.target.value;
        this.setState(newState);
    }

    handleSubmitAddTrack(e) {
        e.preventDefault();
        let { handleAddTrack } = this.props;
        var name = this.refs.name.value;
        var description = this.refs.description.value;
        var track = { name, description };

        if (track != null)
            handleAddTrack(track);
        
        //TODO: handle no track name... bit of validation
    }

    componentWillMount() {
        this.props.setSearchBar({
            defaultValue: "New Track",
            class: "searchBar-track"
        });

        setDocumentTitle("New Track");
    }

    componentWillUnmount() {
        this.props.setSearchBar({
            defaultValue: false,
            class: false
        });

        setDocumentTitle();
    }

    render() {
        let { descriptionCount, nameCount, maxLength } = this.state;
        let { updateStatus } = this.props.ui.tracks;

        return (
            <div className="track-list">
                <h4><Link to="/tracks"><span className="fa-stack nom-green-light"><FontAwesome name="circle" stack="2x" /><FontAwesome name="list-ul" inverse stack="1x" /></span></Link> Create a new track</h4>
                <hr />
                <div className="ibox">
                    <form ref="addTrack" autoComplete="off" onSubmit={this.handleSubmitAddTrack}>
                        <div className="form-group">
                            <label htmlFor="nameInput"><FontAwesome name="list-ul" /> Track name</label>
                            <input type="text" ref="name" className="form-control" placeholder="Enter a track name" disabled={updateStatus ? true : false} maxLength={maxLength.name} onChange={this.handleKeyChange.bind(null, "nameCount")} />
                            {nameCount ? (<small id="nameHelp" className="form-text text-muted"><strong>{nameCount}</strong></small>) : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="description"><FontAwesome name="pencil" /> Description</label>
                            <input type="text" ref="description" className="form-control" placeholder="Enter a description" disabled={updateStatus ? true : false} maxLength={maxLength.description} onChange={this.handleKeyChange.bind(null, "descriptionCount")} />
                            {descriptionCount ? (<small id="descriptionHelp" className="form-text text-muted"><strong>{descriptionCount}</strong></small>) : null}
                        </div>
                        <hr />
                        <div className="form-group">
                            <button type="submit" className="btn btn-success pull-right"><FontAwesome name="plus" /> New track</button> <SaveStatusLabel status={updateStatus} />
                        </div>
                        <div className="clearfix"></div>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewTrack;