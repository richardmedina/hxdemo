import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router-dom';
import store from '../store';

import Modal from './Modal';


export default class UserItem extends Component 
{
    state = {
        redirect: false
    }

    handleOnImgError (event)
    {
        event.target.src = '/noimage.png';
    }

    render ()
    {
        
        let { id, first_name, last_name, avatar, onDeletionFailed = () => {} } = this.props.item;
        
        return (
            <div className="list-group-item list-group-item-action">
                <div className="row">
                    <div className="col-lg-8" style={{border: 'solid 0px red'}}>
                        <Link 
                            style={{display: 'block'}}
                            className="" 
                            to={{
                                pathname: `/user/update/${id}`,
                                extraProps: {
                                    item: this.props.item
                                }
                            }}>
                            <img src={avatar} onError={this.handleOnImgError} alt='userItem' width="50px" className="img img-responsive" />
                            <span className="useritemfullname">
                                {`${first_name} ${last_name}`}
                            </span>
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <button className="btn btn-danger float-right" data-toggle="modal" data-target={`#removeModal`} onClick={this.removeClick.bind(this)}>Remove</button>
                    </div>
                </div>
            </div>
        );
    }

    removeClick ()
    {
        this.props.onRemoveClicked (this.props.item);
    }

    handleRemove ()
    {
        console.log ("handleRemove");
        let dispatchresult = this.props.onRemoveClicked (this.props.item, this.successCallback, this.errorCallback);
        console.log("Remove dispatch result: " + JSON.stringify (dispatchresult));
    }


    successCallback ()
    {
        console.log ("Deleted");
    }

    errorCallback ()
    {
        console.log ("Error removing...");
        this.onDeletionFailed ();
    }
}