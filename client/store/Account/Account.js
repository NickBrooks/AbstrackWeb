import React from 'react';
import FontAwesome from 'react-fontawesome';
import { setDocumentTitle } from '../../functions';
import Avatar from '../../components/Avatar/Avatar';
import ProfileDetailsForm from './views/ProfileDetailsForm';
import UpdatePasswordForm from './views/UpdatePasswordForm';

class Account extends React.Component {
    constructor(props) {
        super(props);

        this.props.handleGetAccount();
        this.props.toggleNewNoteButton(false);
    }

    componentWillUnmount() {
        this.props.toggleNewNoteButton(true);
        setDocumentTitle();
    }

    render() {
        let { account } = this.props;
        setDocumentTitle(account.displayName);

        return (
            <div className="account" >
                <div className="account-header">
                    <div className="row">
                        <div className="col-md-2">
                            <Avatar user={account} size={250} />
                        </div>
                        <div className="col-md-10">
                            <div className="ibox">
                                <h3>{account.displayName} <small className="light">@{account.userName}</small></h3>
                                {account.bio ? (<span>{account.bio}</span>) : (<span className="light"><em>Enter a bio below</em></span>)}
                            </div>
                            <ProfileDetailsForm {...this.props} />
                            <UpdatePasswordForm {...this.props} />                            
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Account;
