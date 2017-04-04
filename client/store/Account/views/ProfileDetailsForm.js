import React from 'react';
import FontAwesome from 'react-fontawesome';

class ProfileDetailsForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleBioChange = this.handleBioChange.bind(this);

        const maxLength = {
                bio: 140,
                location: 80,
                company: 80
            };

        this.state = {
            account: props.account,
            maxLength,
            bioCharacterCount: maxLength.bio - props.account.bio.length
        }
    }

    handleBioChange(event) {
        let { value } = event.target;

        this.setState({ account: {
            bio: value
        },
        bioCharacterCount: this.state.maxLength.bio - value.length
    });
    }

    render() {
        let { account, bioCharacterCount, maxLength } = this.state;

        return (
            <div className="ibox">
                <form ref="editProfile" autoComplete="off">
                    <h5>Profile details</h5>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="bioInput"><FontAwesome name="address-book-o" /> Bio</label>
                        <input type="text" ref="bio" className="form-control" defaultValue={account.bio} id="bioInput" placeholder="Enter a bio" maxLength={maxLength.bio} onChange={this.handleBioChange} />
                        <small id="bioHelp" className="form-text text-muted"><strong>{bioCharacterCount} characters</strong></small>
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
                        <button type="submit" className="btn btn-success pull-right"><FontAwesome name="caret-right" /> Update profile</button>
                    </div>
                    <div className="clearfix"></div>
                </form>
            </div>
        );
    }
}

export default ProfileDetailsForm;
