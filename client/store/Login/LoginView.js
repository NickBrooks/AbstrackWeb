import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import { logo } from '../../data/Images';

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
            <div>
                <div className="login-background"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="login-container">
                                <form ref="loginForm" onSubmit={this.handleLoginSubmit} autoComplete="off">
                                    <div className="text-center"><img className="logo" src={logo.white} alt="Abstrack" /></div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" ref="userName" placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" ref="password" placeholder="Password" />
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <button type="submit" className="btn btn-action"><FontAwesome name="paper-plane" /> Login {isAuthenticating ? <FontAwesome name="spinner" spin /> : undefined}</button>
                                        </div>
                                        <div className="col-xs-6">
                                            <Link to="/register" className="btn btn-success"><FontAwesome name="plus" /> Register</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="login-links">
                                <small><Link to="/login/forgot-password"><FontAwesome name="question-circle-o" /> Forgot Password</Link></small>
                            </div>
                            {errorMsg ?
                                <div className="alert alert-info" role="alert">
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
