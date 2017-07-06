import React from 'react';
import FontAwesome from 'react-fontawesome';

export class ToastifyAction extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { text, icon, action, actionName } = this.props;

        return (
            <div className="toastify-action">
                <button className="btn btn-icon btn-pink" onClick={action}><FontAwesome name={icon} /></button>
                <span>{text}</span>
            </div>
        )
    }
}