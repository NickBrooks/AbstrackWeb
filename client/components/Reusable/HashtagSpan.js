import React from 'react';
import { Link } from 'react-router';

class HashtagSpan extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { hashtag, customClass } = this.props;
        const link = "/t/" + hashtag;
        const tag = "#" + hashtag;
        const className = "tag hashtag tag-" + customClass;

        return (
            <span className={className}><Link to={link}>{tag}</Link></span>
        )
    }
}

export default HashtagSpan;
