import React from 'react';

const Avatar = React.createClass({
    render() {
      let { user, size, customClass } = this.props;
      let avatarSrc = user.avatar.thumb;
      let pixelSize = String(size) + "px";

      //handle customClasses
      let className = "avatar ";
      if (customClass) {
        className = className + customClass;
      }

      if (size > 160) {
        avatarSrc = user.avatar.full;
      }
        return (
                <img className={className} alt={user.display_name} src={avatarSrc} height={pixelSize} width={pixelSize} />
        )
    }
})

export default Avatar;
