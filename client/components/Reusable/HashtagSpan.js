import React from 'react';
import { Link } from 'react-router';

class HashtagSpan extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { hashtag, customClass, disableLink } = this.props;
        const link = "/t/" + hashtag;
        const tag = "#" + hashtag;
        const className = "tag hashtag tag-" + customClass;

        if (disableLink == true) {
            return (<span className={className}>{tag}</span>)
        }

        return (
            <span className={className}><Link to={link}>{tag}</Link></span>
        )
    }
}

export default HashtagSpan;
