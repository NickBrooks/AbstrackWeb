import React from 'react';
import Avatar from '../Reusable/Avatar';

const UserProfile = React.createClass({
    render() {
        let {userId} = this.props.params;
        const { users } = this.props;
        const i = users.findIndex((user) => user.id === userId);
        const user = users[i];

        return (
            <div className="user-profile">
                <div className="row">
                    <div className="col-md-3">
                        <Avatar user={user} size="250" />
                    </div>
                    <div className="col-md-9">
                        <h3>{user.display_name}</h3>
                    </div>
                </div>
            </div>
        )
    }
})

export default UserProfile;
