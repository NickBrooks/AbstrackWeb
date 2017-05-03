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
        let { handleLogin, loginErrorMsg, loginIsAuthenticating } = this.props;
        const userName = this.refs.userName.value;
        const password = this.refs.password.value;

        if (userName == '' || password == '') {
            loginErrorMsg('Enter a username and password');
        } else {
            loginIsAuthenticating(true);
            handleLogin(userName, password);
        }
    }

    componentWillMount() {
        //ensure error message is null when loading
        let {
            ui,
            loginErrorMsg,
            purgeToken
        } = this.props;

        purgeToken();
        
        if (ui.login.errorMsg !== false)
            loginErrorMsg(false);
    }

    render() {
        let { errorMsg, isAuthenticating } = this.props.ui.login;

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
                                    <button type="submit" className="btn btn-success"><FontAwesome name="paper-plane" /> Login {isAuthenticating ? <FontAwesome name="spinner" spin /> : undefined}</button>
                                </form>
                                <div className="login-links">
                                    <small><Link to="/register"><FontAwesome name="plus" /> Register</Link> | <Link to="/login/forgot-password"><FontAwesome name="question-circle-o" /> Forgot Password</Link></small>
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

export default LoginView;
