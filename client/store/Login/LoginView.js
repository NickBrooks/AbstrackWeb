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
        let { handleLogin, loginFailure } = this.props;
        const userName = this.refs.userName.value;
        const password = this.refs.password.value;

        if (userName == '' || password == '') {
            loginFailure('Enter a username and password');
        } else {
            //post the comment
            handleLogin(userName, password);
            this.refs.loginForm.reset();
        }
    }

    render() {
        return (
            <div className="login-background">
                <div className="container login-view">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="login-box">
                                <form ref="loginForm" onSubmit={this.handleLoginSubmit}>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Username</label>
                                        <input type="text" className="form-control" ref="userName" placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" ref="password" placeholder="Password" />
                                    </div>
                                    <hr />
                                    <button type="submit" className="btn btn-success pull-right"><FontAwesome name="paper-plane" /> Login</button>
                                    <div className="clearfix"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginView;
