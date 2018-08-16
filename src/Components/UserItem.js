import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class UserItem extends Component 
{
    render () 
    {
        let { userId } = this.props.item;
        let { userFullName } = this.props.item;
        return (
            <Link 
                to={`/user/edit/${userId}`}
                className="list-group-item list-group-item-action"
            >{userFullName}</Link>
        );
    }
}