import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import { checkPasswordStrength } from '../../functions';

class RegisterView extends React.Component {
    constructor(props) {
        super(props);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        this.handleKeyChange = this.handleKeyChange.bind(this);

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

    handleKeyChange(key, e) {
        var newState = this.state;
        newState[key] = e.target.value;
        this.setState(newState);
    }

    isRegisterButtonDisabled() {
        let { password, confirmPassword } = this.state;

        if (!checkPasswordStrength(password) || password !== confirmPassword)
            return true;

        return false;
    }

    handleRegisterSubmit(e) {
        e.preventDefault();
        let {registerIsRegistering, handleRegistration } = this.props;
        const email = this.refs.email.value;
        const userName = this.refs.userName.value;
        const firstName = this.refs.firstName.value;
        const lastName = this.refs.lastName.value;
        const password = this.refs.password.value;

        registerIsRegistering(true);
        handleRegistration({
            email,
            userName,
            firstName,
            lastName,
            password
        })
    }

    componentWillMount() {
        let {
            ui,
            registerErrorMsg
        } = this.props;

        if (ui.register.errorMsg !== false)
            registerErrorMsg(false);
    }

    render() {
        let { errorMsg, validEmail, isValidatingEmail } = this.props.ui.register;
        const prefilledEmail = this.props.location.query.email;

        return (
            <div className="login-background">
                <div className="container login-view">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="login-box">
                                <h5>Register</h5>
                                <form ref="registerForm" onSubmit={this.handleRegisterSubmit}>
                                    <hr />
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" defaultValue={prefilledEmail ? prefilledEmail : null} ref="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="userName">Username</label>
                                        <input type="userName" minLength={3} maxLength={25} ref="userName" className="form-control" required id="userName"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input type="firstName" maxLength={25} ref="firstName" className="form-control" required id="firstName"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input type="lastName" maxLength={25} ref="lastName" className="form-control" required id="lastName"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">New Password {this.renderPasswordValidation()}</label>
                                        <input type="password" ref="password" className="form-control" required autoComplete="new-password" id="password" onChange={this.handleKeyChange.bind(null, "password")} />
                                        <small id="passwordHelp" className="form-text text-muted">8 or more characters, one uppercase, one digit, one special character (@, $, %, # etc)</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Confirm new password {this.renderConfirmPasswordValidation()}</label>
                                        <input type="password" ref="confirmPassword" className="form-control" required autoComplete="new-password" id="confirmPassword" onChange={this.handleKeyChange.bind(null, "confirmPassword")} />
                                    </div>
                                    <hr />
                                    <button type="submit" className="btn btn-success" disabled={this.isRegisterButtonDisabled() ? "disabled" : false}>Register <FontAwesome name="check" /></button>
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
