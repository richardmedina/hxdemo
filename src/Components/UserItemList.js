import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserItem from './UserItem';


export default class UserItemList extends Component 
{

    constructor ()
    {
        super ();

        this.state = {
            users : [
                {
                    userId : 1,
                    userFullName: "Richard Medina",
                    userEmail: "ricardom@hexaware.com"
                },
                {
                    userId : 2,
                    userFullName: "Ricardo Medina",
                    userEmail: "ricardom@hexaware.com"
                },
                {
                    userId : 3,
                    userFullName: "Kristian Medina",
                    userEmail: "kmedina@hexaware.com"
                },
                {
                    userId : 4,
                    userFullName: "Manuel Medina",
                    userEmail: "mmedina@hexaware.com"
                },
            ]
        };

        this.setState (this.state);
    }

    render () 
    {
        return (
            <div className="user-list list-group">
            {this.state.users.map ((item, index) => <UserItem item={item} />)}
            </div>
        );
    }
}