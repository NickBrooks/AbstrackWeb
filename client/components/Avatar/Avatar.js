import React from 'react';

class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { user, size, customClass } = this.props;
    let pixelSize = String(size) + "px";
    let avatarSrc = "";

    // check if they have an avatar
    if (user.avatarThumb !== undefined) {
      if (size > 160) {
        avatarSrc = user.avatarFull;
      } else {
        avatarSrc = user.avatarThumb;
      }
    } else {
      if (size > 160) {
        avatarSrc = "http://i.imgur.com/Hg2zm3N.jpg";
      } else {
        avatarSrc = "http://i.imgur.com/6HDD0Io.jpg"
      }      
    }

    //handle customClasses
    let className = "avatar ";
    if (customClass) {
      className = className + customClass;
    }
    
    return (
      <img className={className} alt={user.display_name} src={avatarSrc} height={pixelSize} width={pixelSize} />
    )
  }
}

export default Avatar;
