import React from 'react';
import Avatar from './Avatar';

const UserBadge = React.createClass({
    render() {
        const { user } = this.props;
        return (
            <div class="user-badge">
                <Avatar user={user} size="50px" customClass="pull-left" />
            </div>
        )
    }
})

export default UserBadge;