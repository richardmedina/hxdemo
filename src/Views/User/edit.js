import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserEdit extends Component {
    render ()
    {
        return (
        <div>
            <h1>User Edit</h1>
            <div className="row">
                <div className="col-lg-12">
                    <Link className="btn btn-link" to={`/user`}>Go Back</Link>
                </div>
            </div>
        </div>);
    }
}