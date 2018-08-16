import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserIndex extends Component {
    render ()
    {
        return (
        <div>
            <h1>User Index</h1>
            <Link className="nav-link" to={`/user/new}`}>User</Link>
        </div>);
    }
}