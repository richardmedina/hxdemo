import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class UserItem extends Component 
{
    render ()
    {
        let { id, first_name, last_name, avatar } = this.props.item;
        return (
                <div className="list-group-item list-group-item-action">
                <div className="row">
                    <div className="col-lg-8" style={{border: 'solid 0px red'}}>
                        <Link 
                            style={{display: 'block'}}
                            className="" 
                            to={{
                                pathname: `/user/update/${id}`,
                                props: this.props.item
                            }}>
                            <img src={avatar} alt='userItem' width="50px" className="img img-responsive" />
                            <span className="useritemfullname">
                                {`${first_name} ${last_name}`}
                            </span>
                        </Link>
                    </div>
                    <div className="col-lg-4">
                        <button onClick={ this.handleRemove.bind (this) } className="btn btn-danger float-right">Remove</button>
                    </div>
                    </div>
                </div>
        );
    }

    handleRemove ()
    {
        console.log ("internal removing: " + JSON.stringify(this.props.item));
        this.props.onRemoveClicked (this.props.item);
    }
}