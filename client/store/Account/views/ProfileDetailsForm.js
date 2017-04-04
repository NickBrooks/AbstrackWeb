import React from 'react';
import FontAwesome from 'react-fontawesome';
import SaveStatusLabel from '../../../components/SaveStatusLabel';

class ProfileDetailsForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleBioChange = this.handleBioChange.bind(this);
        this.handleUpdateProfileDetailsClick = this.handleUpdateProfileDetailsClick.bind(this);

        const maxLength = {
                bio: 140,
                location: 80,
                company: 80
            };

        this.state = {
            account: props.account,
            maxLength,
            bioCharacterCount: null
        }
    }

    handleBioChange(event) {
        let { value } = event.target;

        this.setState({
            account: {
                bio: value
            },
            bioCharacterCount: this.state.maxLength.bio - value.length
        });
    }

    handleUpdateProfileDetailsClick(e) {
        e.preventDefault();
        let { handleUpdateProfileDetails } = this.props;

        handleUpdateProfileDetails({
            bio: this.refs.bio.value,
            company: this.refs.company.value,
            location: this.refs.location.value
        });
    }

    render() {
        let { account, bioCharacterCount, maxLength } = this.state;
        let { updateStatus } = this.props.ui.account.profileDetails;

        return (
            <div className="ibox">
                <form ref="editProfile" autoComplete="off" onSubmit={this.handleUpdateProfileDetailsClick}>
                    <h5>Profile details</h5>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="bioInput"><FontAwesome name="address-book-o" /> Bio</label>
                        <input type="text" ref="bio" className="form-control" defaultValue={account.bio} id="bioInput" placeholder="Enter a bio" maxLength={maxLength.bio} onChange={this.handleBioChange} />
                        {bioCharacterCount ? (<small id="bioHelp" className="form-text text-muted"><strong>{bioCharacterCount} characters</strong></small>) : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="companyInput"><FontAwesome name="group" /> Company</label>
                        <input type="text" ref="company" className="form-control" defaultValue={account.company} id="companyInput" placeholder="Enter your company" maxLength={maxLength.company} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="locationInput"><FontAwesome name="location-arrow" /> Location</label>
                        <input type="text" ref="location" className="form-control" defaultValue={account.location} id="locationInput" placeholder="Share your location" maxLength={maxLength.location} />
                    </div>
                    <hr />
                    <div className="form-group">
                        <button type="submit" className="btn btn-success pull-right"><FontAwesome name="caret-right" /> Update profile</button> <SaveStatusLabel status={updateStatus} />
                    </div>
                    <div className="clearfix"></div>
                </form>
            </div>
        );
    }
}

export default ProfileDetailsForm;
