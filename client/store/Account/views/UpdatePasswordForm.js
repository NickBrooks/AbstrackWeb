import React from 'react';
import FontAwesome from 'react-fontawesome';

class UpdatePasswordForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { account } = this.props;

        return (
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
        );
    }
}

export default UpdatePasswordForm;
