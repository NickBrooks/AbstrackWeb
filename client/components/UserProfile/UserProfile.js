import React from 'react';
import Avatar from '../Reusable/Avatar';
import ListNoms from '../ListNoms/ListNoms';

function filterUserNoms(userId, nom) {
    return nom.created_by.id == userId;
};

const UserProfile = React.createClass({
    render() {
        let {userId } = this.props.params;
        let { noms, users } = this.props;
        let userNoms = noms.filter(filterUserNoms.bind(null, userId));
        const i = users.findIndex((user) => user.id === userId);
        const user = users[i];

        return (
            <div className="user-profile" >
                <div className="profile-header">
                    <div className="row">
                        <div className="col-md-3">
                            <Avatar user={user} />
                        </div>
                        <div className="col-md-9">
                            <h3>{user.display_name}</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <ListNoms noms={userNoms} />
                    </div>
                </div>
            </div >
        );
    }
});

export default UserProfile;
