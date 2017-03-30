import React from 'react';
import Avatar from '../../components/Avatar/Avatar';
import ListNoms from '../../components/NomDisplay/NomDisplay';

class Account extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { account } = this.props;

        return (
            <div className="account" >
                <div className="account-header">
                    <div className="row">
                        <div className="col-md-3">
                            <Avatar user={account} />
                        </div>
                        <div className="col-md-9">
                            <h3>{user.displayName}</h3>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Account;
