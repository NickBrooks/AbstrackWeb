import React from 'react';
import HashtagSpan from './HashtagSpan';
import FontAwesome from 'react-fontawesome';

const NomHeader = React.createClass({
    render() {
        return (
                <div className="nom-header">
                    <h3>{this.props.title} <span className="light"> <FontAwesome name="caret-down" /></span></h3>
                    <div className="hashtags">
                      {this.props.hashtags.map((hashtag, i) => <HashtagSpan {...this.props} hashtag={hashtag} customClass="default" key={i} i={i} />)}
                    </div>
                </div>
        )
    }
})

export default NomHeader;
