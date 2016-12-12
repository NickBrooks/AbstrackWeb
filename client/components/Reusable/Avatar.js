import React from 'react';

const Avatar = React.createClass({
    render() {
        return (
                <img className="avatar" alt={this.props.user} src={this.props.src} user={this.props.user} height={this.props.size} width={this.props.size} customClass={this.props.customClass} />
        )
    }
})

export default Avatar;
