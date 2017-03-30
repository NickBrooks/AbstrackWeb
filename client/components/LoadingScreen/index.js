import React from 'react';
import FontAwesome from 'react-fontawesome';

class LoadingScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const divStyle = {
            position: 'fixed',
            textAlign: 'center',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
        const imgStyle = {
            marginBottom: '30px'
        }

        return (
            <div className="loading-screen">
                <div style={divStyle}>
                    <img style={imgStyle} src="http://i.imgur.com/amJqucj.png" alt="launching" />
                    <h4>Launching all the magic...</h4>
                </div>
            </div>
        )
    }
}

export default LoadingScreen;
