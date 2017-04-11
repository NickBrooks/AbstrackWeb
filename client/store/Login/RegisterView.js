import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

class RegisterView extends React.Component {
    constructor(props) {
        super(props);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
        this.handleEmailValidationClick = this.handleEmailValidationClick.bind(this);
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
            registerErrorMsg
        } = this.props;

        if (ui.register.errorMsg !== false)
            registerErrorMsg(false);
    }

    render() {
        let { errorMsg, isValidatingEmail } = this.props.ui.register;
        const prefilledEmail = this.props.location.query.email;

        return (
            <div className="login-background">
                <div className="container login-view">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="login-box">
                                <form ref="registerForm" onSubmit={this.handleEmailValidationClick}>
                                    <div className="form-group">
                                        <label><FontAwesome name="user" /> Email</label>
                                        <input type="email" className="form-control" defaultValue={prefilledEmail ? prefilledEmail : null} ref="email" placeholder="Email" />
                                    </div>
                                    <hr />
                                    <button type="submit" className="btn btn-success"><FontAwesome name="paper-plane" /> Next {isValidatingEmail ? <FontAwesome name="spinner" spin /> : undefined}</button>
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
