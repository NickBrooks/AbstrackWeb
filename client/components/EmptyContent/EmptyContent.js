import React from 'react';

class EmptyContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { emptyContent } = this.props;

        return (
            <div className="empty-content">
                <img src={emptyContent.img} alt={emptyContent.text} />
                <h4>{emptyContent.text}</h4>
            </div>
        )
    }
}

export default EmptyContent;
