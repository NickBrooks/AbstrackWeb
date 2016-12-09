import React from 'react';
import { Link } from 'react-router';

const NomNode = React.createClass({
    render() {
        const { title, id } = this.props;
        const link = "/n/" + id;

        return (
            <Link to={link}>
                <li>
                    <span>{title}</span>
                </li>
            </Link>
        )
    }
})

export default NomNode;