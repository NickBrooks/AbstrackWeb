import React from 'react';

class FullScreenView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}

export default FullScreenView;
