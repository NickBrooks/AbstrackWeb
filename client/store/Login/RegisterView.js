import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

class RegisterView extends React.Component {
    constructor(props) {
        super(props);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    }

    handleRegisterSubmit(e) {
        e.preventDefault();
    }

    render() {
        let { errorMsg, isAuthenticating } = this.props.ui.login;

        return (
            <div className="login-background">
                <div className="container login-view">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="login-box">
                                <form ref="registerForm" onSubmit={this.handleRegisterSubmit}>
                                    <p>Register form</p>
                                    <hr />
                                    <button type="submit" className="btn btn-success"><FontAwesome name="paper-plane" /> Register {isAuthenticating ? <FontAwesome name="spinner" spin /> : undefined}</button>
                                </form>
                                <div className="register-links">
                                    <small><Link to="/login"><FontAwesome name="key" /> Login</Link></small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterView;
