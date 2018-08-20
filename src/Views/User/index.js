import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserItemList from '../../Components/UserItemList'

export default class UserIndex extends Component {
    render ()
    {
        
        return (
            
            <div className="row">
                <div className="col-lg-12">
                    <h1>Current User List</h1>
                    <span>Please click on any below user to modify it.</span>
                    
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
