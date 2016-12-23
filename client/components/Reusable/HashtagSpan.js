import React from 'react';
import { Link } from 'react-router';

const HashtagSpan = React.createClass({
    render() {
        const { hashtag, customClass } = this.props;
        const link = "/t/" + hashtag;
        const tag = "#" + hashtag;
        const className = "tag hashtag tag-" + customClass;

        return (
          <span className={className}><Link to={link}>{tag}</Link></span>
        )
    }
})

export default HashtagSpan;
