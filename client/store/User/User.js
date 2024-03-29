import React from 'react';
import Avatar from '../../components/Avatar/Avatar';
import NoteList from '../../components/NoteList/NoteList';

function filterUserNotes(userId, note) {
    return note.createdBy.id == userId;
}

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {userId } = this.props.params;
        let { notes, users } = this.props;
        let userNotes = notes.filter(filterUserNotes.bind(null, userId));
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
                        <NoteList notes={userNotes} />
                    </div>
                </div>
            </div >
        );
    }
}

export default User;
