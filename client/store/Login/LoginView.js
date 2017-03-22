import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    loginError(error) {
        console.log(error);
    }

    handleLogin(e) {
        e.preventDefault();
        let { handleLogin } = this.props;
        const userName = this.refs.userName.value;
        const password = this.refs.password.value;

        if (userName == '' || password == '') {
            loginError('Write a comment yo!');
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
                        <form ref="loginForm" className="add-comment" onSubmit={this.handleLogin}>
                            <div className="ibox">
                                <input type="text" ref="userName" placeholder="Username" />                                
                                <input type="text" ref="password" placeholder="Password" />
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
