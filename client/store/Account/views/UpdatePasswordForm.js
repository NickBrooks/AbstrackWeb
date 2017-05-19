import React from 'react';
import FontAwesome from 'react-fontawesome';
import { checkPasswordStrength } from '../../../functions';
import SaveStatusLabel from '../../../components/SaveStatusLabel';

class UpdatePasswordForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpdatePasswordClick = this.handleUpdatePasswordClick.bind(this);
        this.handleKeyChange = this.handleKeyChange.bind(this);

        this.state = {
            currentPassword: "",
            newPassword: "",
            confirmPassword: ""
        }
    }

    renderCurrentPasswordValidation() {
        let { currentPassword, newPassword } = this.state;

        if (newPassword != "" && currentPassword.length === 0) {
            return (<FontAwesome name="exclamation-triangle" />);
        } else {
            return undefined;
        }
    }

    renderNewPasswordValidation() {
        let { newPassword } = this.state;

        if (newPassword.length === 0) {
            return undefined;
        } else if (!checkPasswordStrength(newPassword))
            return (<FontAwesome name="exclamation-triangle" />);
        else {
            return (<FontAwesome name="check" />);
        }
    }

    renderConfirmPasswordValidation() {
        let { newPassword, confirmPassword } = this.state;

        if (confirmPassword.length === 0) {
            return undefined;
        } else if (newPassword == confirmPassword) {
            return (<FontAwesome name="check" />);
        } else {
            return (<FontAwesome name="exclamation-triangle" />);
        }
    }

    isButtonDisabled() {
        let { currentPassword, newPassword, confirmPassword } = this.state;

        if (currentPassword.length === 0) {
            return true;
        } else if (!checkPasswordStrength(newPassword)) {
            return true;
        } else if (newPassword !== confirmPassword) {
            return true;
        } else {
            return false;
        }
    }

    handleKeyChange(key, e) {
        var newState = this.state;
        newState[key] = e.target.value;
        this.setState(newState);
    }

    handleUpdatePasswordClick(e) {
        e.preventDefault();
        let { handleUpdatePassword } = this.props;
        let { currentPassword, newPassword, confirmPassword } = this.state;

        handleUpdatePassword(currentPassword, newPassword);
        this.refs.updatePassword.reset();
    }

    componentWillMount() {
        //ensure error message is null when loading
        let {
            ui,
            updatePasswordErrorMsg
        } = this.props;

        if (ui.account.password.errorMsg !== false)
            updatePasswordErrorMsg(false);
    }

    render() {
        let { errorMsg, updateStatus } = this.props.ui.account.password;

        return (
            <div className="ibox">
                <form ref="updatePassword" onSubmit={this.handleUpdatePasswordClick}>
                    <h5>Update password</h5>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="currentPassword">Current password {this.renderCurrentPasswordValidation()}</label>
                        <input type="password" ref="currentPassword" className="form-control" required id="currentPassword" onChange={this.handleKeyChange.bind(null, "currentPassword")} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="newPassword">New Password {this.renderNewPasswordValidation()}</label>
                        <input type="password" ref="newPassword" className="form-control" required autoComplete="new-password" id="newPassword" onChange={this.handleKeyChange.bind(null, "newPassword")} />
                        <small id="passwordHelp" className="form-text text-muted">8 or more characters, one uppercase, one digit, one special character (@, $, %, # etc)</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm new password {this.renderConfirmPasswordValidation()}</label>
                        <input type="password" ref="confirmPassword" className="form-control" required autoComplete="new-password" id="confirmPassword" onChange={this.handleKeyChange.bind(null, "confirmPassword")} />
                    </div>

                    {errorMsg ? (<span className="error"><FontAwesome name="exclamation-triangle" /> {errorMsg}</span>) : undefined}
                    <hr />
                    <div className="form-group">
                        <button type="submit" className="btn btn-success pull-right" disabled={this.isButtonDisabled() ? "disabled" : false}><FontAwesome name="caret-right" /> Update password</button> <SaveStatusLabel status={updateStatus} />
                    </div>
                    <div className="clearfix"></div>
                </form>
            </div>
        );
    }
}

export default UpdatePasswordForm;
