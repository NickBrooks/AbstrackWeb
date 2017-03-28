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
            <div className="container login-view">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form ref="loginForm" className="add-comment" onSubmit={this.handleLoginSubmit}>
                            <div className="ibox">
                                <input type="text" ref="userName" placeholder="Username" defaultValue="mattcrouch" />
                                <input type="text" ref="password" placeholder="Password" defaultValue="AFC9798!" />
                                <hr />
                                <button type="submit" className="btn btn-sm btn-success pull-right"><FontAwesome name="paper-plane" /> Login</button>
                                <div className="clearfix"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginView;
