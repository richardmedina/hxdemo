import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class UserItem extends Component 
{
    render () 
    {
        let { id, first_name, last_name, avatar } = this.props.item;
        return (
                <Link className="list-group-item list-group-item-action" to={`/user/update/${id}`}>
                    <img src={avatar} width="50px" className="img img-responsive" />
                    <span class="useritemfullname">
                        {`${first_name} ${last_name}`}
                    </span>
                    <Link to="/user/delete" class="btn btn-danger float-right">Remove</Link>
                </Link>
        );
    }
}