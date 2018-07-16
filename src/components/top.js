import React from 'react';
import { Link } from 'react-router-dom'

export default class TopComponent extends React.Component {
    render() {
        return (
            <div>
                <span>Top</span>
                <br />
                <Link to="/counter">counter</Link>
            </div>
        );
    }
}
