import React from 'react';
import FontAwesome from 'react-fontawesome';

class SaveStatusLabel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { status } = this.props;

        const style = {
            marginTop: "6px",
            marginRight: "10px",
            color: "#27ae60"
        }

        if (status === "updating") {
            return (<span style={style} className="pull-right"><FontAwesome name="spinner" spin /></span>);
        } else if (status === "saved") {
            return (<span style={style} className="pull-right"><FontAwesome name="check" /> Saved</span>);
        }

        return null;
    }
}

export default SaveStatusLabel;
