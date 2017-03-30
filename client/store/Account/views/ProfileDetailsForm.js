import React from 'react';
import FontAwesome from 'react-fontawesome';

class ProfileDetailsForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { account } = this.props;

        return (
            <div className="ibox">
                <form ref="editProfile">
                    <h5>Profile details</h5>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="bioInput"><FontAwesome name="address-book-o" /> Bio</label>
                        <input type="text" ref="bio" className="form-control" defaultValue={account.bio} id="bioInput" placeholder="Enter a bio" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="companyInput"><FontAwesome name="group" /> Company</label>
                        <input type="text" ref="company" className="form-control" defaultValue={account.company} id="companyInput" placeholder="Enter your company" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="locationInput"><FontAwesome name="location-arrow" /> Location</label>
                        <input type="text" ref="location" className="form-control" defaultValue={account.location} id="locationInput" placeholder="Share your location" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="urlInput"><FontAwesome name="link" /> URL</label>
                        <input type="url" ref="url" className="form-control" defaultValue={account.url} id="urlInput" placeholder="Enter a url" />
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
