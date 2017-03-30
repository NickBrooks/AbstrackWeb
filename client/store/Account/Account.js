import React from 'react';
import FontAwesome from 'react-fontawesome';
import Avatar from '../../components/Avatar/Avatar';
import ListNoms from '../../components/NomDisplay/NomDisplay';

class Account extends React.Component {
    constructor(props) {
        super(props);

        this.props.getAccount();
        this.props.toggleNewNomButton(false);
    }

    componentWillUnmount() {
        this.props.toggleNewNomButton(true);
    }

    render() {
        let { account } = this.props;

        return (
            <div className="account" >
                <div className="account-header">
                    <div className="row">
                        <div className="col-md-2">
                            <Avatar user={account} size={250} />
                        </div>
                        <div className="col-md-10">
                            <div className="ibox">
                                <h3>{account.displayName} <small className="light">@{account.userName}</small></h3>
                                <span>A chink in your armour.</span>
                            </div>
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
                                        <input type="text" ref="company" className="form-control" defaultValue={account.bio} id="companyInput" placeholder="Enter your company" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="locationInput"><FontAwesome name="location-arrow" /> Location</label>
                                        <input type="text" ref="location" className="form-control" defaultValue={account.bio} id="locationInput" placeholder="Share your location" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="urlInput"><FontAwesome name="link" /> URL</label>
                                        <input type="text" ref="url" className="form-control" defaultValue={account.url} id="urlInput" placeholder="Enter a url" />
                                    </div>
                                    <hr />
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-success pull-right"><FontAwesome name="caret-right" /> Update profile</button>
                                    </div>
                                    <div className="clearfix"></div>
                                </form>
                            </div>
                            <div className="ibox">
                                <form ref="updatePassword">
                                    <h5>Update password</h5>
                                    <hr />
                                    <div className="form-group">
                                        <label htmlFor="currentPassword">Current password</label>
                                        <input type="password" ref="currentPassword" className="form-control" id="currentPassword" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="newPassword">New Password</label>
                                        <input type="password" ref="newPassword" className="form-control" id="newPassword" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Confirm new password</label>
                                        <input type="password" ref="confirmPassword" className="form-control" id="confirmPassword" />
                                    </div>
                                    <hr />
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-success pull-right"><FontAwesome name="caret-right" /> Update password</button>
                                    </div>
                                    <div className="clearfix"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Account;
