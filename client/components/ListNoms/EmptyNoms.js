import React from 'react';

class EmptyNoms extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { emptyNoms } = this.props;

        return (
            <div className="empty-noms">
                <img src={emptyNoms.img} alt={emptyNoms.text} />
                <h4>{emptyNoms.text}</h4>
            </div>
        )
    }
}

export default EmptyNoms;
