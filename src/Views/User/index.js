import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserItemList from '../../Components/UserItemList'

export default class UserIndex extends Component {
    render ()
    {
        return (
            
            <div className="row">
                <div className="col-lg-12">
                    <h1>User Index</h1>
                    <span>Please click the user you want to modify.</span>
                    <div className="row user-index-toolbar">
                        <div className="col-lg-12">
                            <Link className="btn btn-success float-right" to={`/user/create`}>Create User</Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <UserItemList />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
