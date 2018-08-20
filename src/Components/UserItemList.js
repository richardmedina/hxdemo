import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import store from '../store';

import UserItem from './UserItem';
import Modal from './Modal';
import { refreshUsers, addToUsers, removeFromUsers} from '../ActionCreators/Users';
import { mapStateToProps, mapDispatchToProps } from '../Mappers/UserMapper';

class UserItemList extends Component  
{
    constructor (props)
    {
        super (props);
        this.state = {
            modalMessage: "",
            showErrorMessage: false,
            screenState: "initial"
        };
        
        //props.refreshUserList (this.successCallback.bind(this), this.errorCallback.bind(this));
    }

    

    render ()
    {
        console.log ("UserlistProps: " + JSON.stringify(this.props));
        let {users, removeUser} = this.props;
        let { modalMessage = "", showErrorMessage, screenState = "", msg = "Working..."} = this.state;

        let errorMessage = 
            showErrorMessage ?
                <div className="alert alert-danger fade show" role="alert">
                    Error deleting user.
                </div>
            : "";
        
            let message = "";
            switch (screenState)
            {
                case "error":
                    message = <div className="alert alert-danger" role="alert">
                    Operation Failed.
                    </div>;
                break;
                case "loading":
                    message = <div className="alert alert-primary" role="alert">
                    {msg}
                    </div>;
                break;
            }

        return (
            <div>
                {message}
                <div className="row user-index-toolbar">
                        <div className="col-lg-12">
                            <Link className="btn btn-success float-right" 
                            to={
                                {
                                    pathname: `/user/create`
                                }
                            }>Create User</Link>
                        </div>
                    </div>
                {errorMessage}
                <div className="user-list list-group">
                {users && users.data && users.data.map ((item, index) => <UserItem key={item.id} item={item} onOkClicked={this.onCreateOkClicked} onRemoveClicked={this.onRemoveClicked.bind(this)}  />)}
                </div>
                <Modal 
                    id="removeModal"
                    title="Confirmation" 
                    message={modalMessage}
                    OnOkClicked={this.handleRemove.bind (this)} />
            </div>
        );

    }

    onRemoveClicked (user)
    {
        this.itemToRemove = user;
        console.log ("itemToRemove: " + JSON.stringify(this.itemToRemove));
        //this.modal.setMessage ("Are you sure you want to delete to " + user.first_name + " " + user.last_namer + "?");
        this.setState ({
            ...this.state,
            modalMessage: "Are you sure you want to delete to " + user.first_name + " " + user.last_name + "?"
        });
    }

    handleRemove ()
    {
        this.props.removeUser (this.itemToRemove, this.successCallback.bind(this), this.removeFailed.bind(this));
        this.setState ({
            ...this.state,
            screenState: "loading",
            msg: "Deleting User..."
        });
    }

    removeSuccess ()
    {
        this.setState ({
            ...this.state,
            screenSatte: "error",
            msg: "Error when trying to delete this user, please try again later"
        });
    }

    removeFailed ()
    {
        this.setState ({
            ...this.state,
            showErrorMessage: true
        });
    }

    onCreateOkClicked (user)
    {
        console.log ("UserItemList.onCreateOkClicked: " + JSON.stringify(user));
        
    }

    successCallback ()
    {
        this.setState ({
            ...this.state,
            screenState: "initial"
        });
    }

    errorCallback ()
    {
        this.setState ({
            ...this.state,
            screenState: "error"
        });
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (UserItemList);