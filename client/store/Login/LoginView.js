import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleLoginSubmit(e) {
        e.preventDefault();
        let { handleLogin, msgLoginError } = this.props;
        const userName = this.refs.userName.value;
        const password = this.refs.password.value;

        if (userName == '' || password == '') {
            msgLoginError('Enter a username and password');
        } else {
            //post the comment
            handleLogin(userName, password);
        }
    }

    render() {
        let { msgLoginError } = this.props.ui.login;

        return (
            <div className="login-background">
                <div className="container login-view">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="login-box">
                                <form ref="loginForm" onSubmit={this.handleLoginSubmit}>
                                    <div className="form-group">
                                        <label><FontAwesome name="user" /> Username</label>
                                        <input type="text" className="form-control" ref="userName" placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <label><FontAwesome name="key" /> Password</label>
                                        <input type="password" className="form-control" ref="password" placeholder="Password" />
                                    </div>
                                    <hr />
                                    <button type="submit" className="btn btn-success"><FontAwesome name="paper-plane" /> Login</button>
                                    <div className="login-links">
                                        <p className="text-center"><small><FontAwesome name="question-circle-o" /> Forgot Password</small></p>
                                    </div>
                                </form>
                            </div>
                            {msgLoginError !== undefined ?
                            <div className="alert alert-danger" role="alert">
                                <FontAwesome name="exclamation-triangle" /> {msgLoginError}
                            </div>
                            : undefined}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginView;
