import React from 'react';

const Avatar = React.createClass({
    render() {
      let { user, size, customClass } = this.props;
      let avatarSrc = user.avatar.thumb;
      let pixelSize = String(size) + "px";

      if (size > 160) {
        avatarSrc = user.avatar.full;
      }
        return (
                <img className="avatar" alt={user.display_name} src={avatarSrc} user={user.display_name} height={pixelSize} width={pixelSize} customClass={customClass} />
        )
    }
})

export default Avatar;
