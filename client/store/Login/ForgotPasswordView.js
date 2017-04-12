import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

class RegisterView extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            successMsg: false
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        let { handleForgotPassword } = this.props;
        const email = this.refs.email.value;

        handleForgotPassword(email);
        this.setState({ successMsg: "An email with instructions to reset your password has been sent to " + email + "." });
        this.refs.forgotPasswordForm.reset();
    }

    render() {
        let { successMsg } = this.state;

        return (
            <div className="login-background">
                <div className="container login-view">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="login-box">
                                <h5>Forgot password</h5>
                                <hr />
                                <form ref="forgotPasswordForm" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label><FontAwesome name="user" /> Email</label>
                                        <input type="email" className="form-control" ref="email" required placeholder="Email" />
                                    </div>
                                    <hr />
                                    <button type="submit" className="btn btn-success"><FontAwesome name="envelope" /> Reset password</button>
                                </form>
                                <div className="register-links">
                                    <small><Link to="/login"><FontAwesome name="key" /> Login</Link></small>
                                </div>
                            </div>
                            {successMsg ?
                                <div className="alert alert-success" role="alert">
                                    <FontAwesome name="check" /> {successMsg}
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
