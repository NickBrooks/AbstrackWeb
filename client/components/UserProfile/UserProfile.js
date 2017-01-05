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
                <h1>{user.display_name}</h1>
                <Avatar user={user} size="250" />
            </div>
        )
    }
})

export default UserProfile;
