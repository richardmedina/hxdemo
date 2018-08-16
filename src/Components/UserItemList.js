import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserItem from './UserItem';


export default class UserItemList extends Component 
{

    constructor ()
    {
        super ();

        this.state = {
            users : {
                "page":1,
                "per_page":3,
                "total":12,
                "total_pages":4,
                "data":[
                    {
                        "id":1,
                        "first_name":"George",
                        "last_name":"Bluth",
                        "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
                    },
                    {
                        "id":2,
                        "first_name":"Janet",
                        "last_name":"Weaver",
                        "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
                    },
                    {
                        "id":3,
                        "first_name":"Emma",
                        "last_name":"Wong",
                        "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
                    }
                ]
            }
        };

        this.setState (this.state);
    }

    render () 
    {
        return (
            <div className="user-list list-group">
            {this.state.users.data.map ((item, index) => <UserItem item={item} />)}
            </div>
        );
    }
}