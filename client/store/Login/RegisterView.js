import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import { checkPasswordStrength } from '../../functions';

class RegisterView extends React.Component {
    constructor(props) {
        super(props);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        this.handleEmailValidationClick = this.handleEmailValidationClick.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);

        this.state = {
            password: "",
            confirmPassword: ""
        }
    }

    renderPasswordValidation() {
        let { password } = this.state;

        if (password.length === 0) {
            return undefined;
        } else if (!checkPasswordStrength(password))
            return (<FontAwesome name="exclamation-triangle" />);
        else {
            return (<FontAwesome name="check" />);
        }
    }

    renderConfirmPasswordValidation() {
        let { password, confirmPassword } = this.state;

        if (confirmPassword.length === 0) {
            return undefined;
        } else if (password == confirmPassword) {
            return (<FontAwesome name="check" />);
        } else {
            return (<FontAwesome name="exclamation-triangle" />);
        }
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleConfirmPasswordChange(event) {
        this.setState({ confirmPassword: event.target.value });
    }

    isRegisterButtonDisabled() {
        let { password, confirmPassword } = this.state;

        if (!checkPasswordStrength(password)) {
            return true;
        } else if (password !== confirmPassword) {
            return true;
        } else {
            return false;
        }
    }

    handleEmailValidationClick(e) {
        e.preventDefault();
        let { handleValidateEmail, registerErrorMsg, registerIsValidatingEmail } = this.props;
        const email = this.refs.email.value;

        if (email == '') {
            registerErrorMsg('Enter an email');
        } else {
            registerErrorMsg(false);
            registerIsValidatingEmail(true);
            handleValidateEmail(email);
        }
    }

    handleRegisterSubmit(e) {
        e.preventDefault();
    }

    componentWillMount() {
        //ensure error message is null when loading
        let {
            ui,
            registerErrorMsg,
            registerSetValidEmail
        } = this.props;

        if (ui.register.errorMsg !== false)
            registerErrorMsg(false);

        if (ui.register.validEmail !== false)
            registerSetValidEmail(false);
    }

    renderEnterEmail() {
        let { isValidatingEmail } = this.props.ui.register;
        const prefilledEmail = this.props.location.query.email;

        return (
            <div>
                <div className="form-group">
                    <label><FontAwesome name="user" /> Email</label>
                    <input type="email" className="form-control" defaultValue={prefilledEmail ? prefilledEmail : null} ref="email" placeholder="Email" />
                </div>
                <hr />
                <button onClick={this.handleEmailValidationClick} className="btn btn-success">Next {isValidatingEmail ? <FontAwesome name="spinner" spin /> : <FontAwesome name="caret-right" />}</button>
            </div>
        );
    }

    renderEnterPassword() {
        let { password, confirmPassword } = this.state;

        return (
            <div>
                <div className="form-group">
                    <label htmlFor="password">New Password {this.renderPasswordValidation()}</label>
                    <input type="password" ref="password" className="form-control" required value={password} autoComplete="new-password" id="password" onChange={this.handlePasswordChange} />
                    <small id="passwordHelp" className="form-text text-muted">8 or more characters, one uppercase, one digit, one special character (@, $, %, # etc)</small>
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm new password {this.renderConfirmPasswordValidation()}</label>
                    <input type="password" ref="confirmPassword" className="form-control" required value={confirmPassword} autoComplete="new-password" id="confirmPassword" onChange={this.handleConfirmPasswordChange} />
                </div>
                <hr />
                <button type="submit" className="btn btn-success" disabled={this.isRegisterButtonDisabled() ? "disabled" : false}>Register <FontAwesome name="check" /></button>
            </div>
        );
    }

    render() {
        let { errorMsg, validEmail } = this.props.ui.register;

        return (
            <div className="login-background">
                <div className="container login-view">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="login-box">
                                <h5>Register</h5>
                                <hr />
                                <form ref="registerForm" onSubmit={this.handleRegisterSubmit}>
                                    {validEmail ? this.renderEnterPassword() : this.renderEnterEmail()}
                                </form>
                                <div className="register-links">
                                    <small><Link to="/login"><FontAwesome name="key" /> Login</Link></small>
                                </div>
                            </div>
                            {errorMsg ?
                                <div className="alert alert-danger" role="alert">
                                    <FontAwesome name="exclamation-triangle" /> {errorMsg}
                                </div>
                                : undefined}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterView;
