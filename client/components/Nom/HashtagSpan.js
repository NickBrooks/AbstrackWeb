import React from 'react';
import { Link } from 'react-router';

const HashtagSpan = React.createClass({
    render() {
      console.log(this.props);
        const { hashtag, customClass } = this.props;
        const link = "/t/" + hashtag;
        const tag = "#" + hashtag;
        const className = "tag tag-" + customClass;

        return (
          <span className={className}><Link to={link}>{tag}</Link></span>
        )
    }
})

export default HashtagSpan;
