import React from 'react';
import FontAwesome from 'react-fontawesome';
import { checkPasswordStrength } from '../../../functions';

class UpdatePasswordForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmitNewPassword = this.handleSubmitNewPassword.bind(this);
        this.handleCurrentPasswordChange = this.handleCurrentPasswordChange.bind(this);
        this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);

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

    renderUpdateStatus() {
        let { updateStatus } = this.props.ui.account.password;
        const style = {
            marginTop: "6px",
            marginRight: "10px",
            color: "#27ae60"
        }

        if (updateStatus === "updating") {
            return (<span style={style} className="pull-right"><FontAwesome name="spinner" spin /></span>);
        } else if (updateStatus === "saved") {
            return (<span style={style} className="pull-right"><FontAwesome name="check" /> Saved</span>);
        } else {
            return undefined;
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

    handleCurrentPasswordChange(event) {
        this.setState({ currentPassword: event.target.value });
    }

    handleNewPasswordChange(event) {
        this.setState({ newPassword: event.target.value });
    }

    handleConfirmPasswordChange(event) {
        this.setState({ confirmPassword: event.target.value });
    }

    handleSubmitNewPassword(e) {
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
        let { errorMsg, isUpdating } = this.props.ui.account.password;

        return (
            <div className="ibox">
                <form ref="updatePassword" onSubmit={this.handleSubmitNewPassword}>
                    <h5>Update password</h5>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="currentPassword">Current password {this.renderCurrentPasswordValidation()}</label>
                        <input type="password" ref="currentPassword" className="form-control" required id="currentPassword" onChange={this.handleCurrentPasswordChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="newPassword">New Password {this.renderNewPasswordValidation()}</label>
                        <input type="password" ref="newPassword" className="form-control" required autoComplete="new-password" id="newPassword" onChange={this.handleNewPasswordChange} />
                        <small id="passwordHelp" className="form-text text-muted">8 or more characters, one uppercase, one digit, one special character (@, $, %, # etc)</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm new password {this.renderConfirmPasswordValidation()}</label>
                        <input type="password" ref="confirmPassword" className="form-control" required autoComplete="new-password" id="confirmPassword" onChange={this.handleConfirmPasswordChange} />
                    </div>

                    {errorMsg ? (<span className="error"><FontAwesome name="exclamation-triangle" /> {errorMsg}</span>) : undefined}
                    <hr />
                    <div className="form-group">
                        <button type="submit" className="btn btn-success pull-right" disabled={this.isButtonDisabled() ? "disabled" : false}><FontAwesome name="caret-right" /> Update password</button> {this.renderUpdateStatus()}
                    </div>
                    <div className="clearfix"></div>
                </form>
            </div>
        );
    }
}

export default UpdatePasswordForm;