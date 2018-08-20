import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Modal from '../../Components/Modal';
import store from '../../store';
import { addToUsers } from '../../ActionCreators/Users';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../Mappers/UserMapper';

class UserEdit extends Component {

    constructor (props)
    {
        super (props);

        let p = props.location.extraProps;

        if (p && p.item !== "undefined") 
        {
            this.state = {
                user: p.item, 
                okButtonText: 'Update'
            };
            
        } else 
        {
            this.state = {
                user: {
                    id : '',
                    first_name: '',
                    last_name: '',
                    avatar: '',
                },
                okButtonText: 'Create'
            };
        }
    }

    handleImageError (event)
    {
        console.log('target: ' + JSON.stringify(event.target.src));
        event.target.src = '/noimage.png';
    }

    onChange (event)
    {
        this.setState ({
            ...this.state,
            user: {
                ...this.state.user,
                [event.target.id] : event.target.value
            }
        });
    }

    render ()
    {
        let { extraProps } = this.props.location;
        let { screenState } = this.state;

        console.log ("render state: " + JSON.stringify(this.state));

        let message;

        switch (screenState)
        {
            case "created":
            case "updated":
                message = <div className="alert alert-success" role="alert">
                    User has been {screenState}.
                </div>;
            break;

            case "error":
                message = <div className="alert alert-danger" role="alert">
                Error saving user.
                </div>;
            break;
            case "loading":
                message = <div className="alert alert-primary" role="alert">
                Working...
                </div>;
            break;

        }


        return (
        <div>
            <h1>User New</h1>
            <div className="row">
                <div className="col-lg-12">
                    <Link className="btn btn-link" to={`/user`}>Go Back</Link>
                </div>
            </div>

            <form className="form-group">
                <div className="form-row">
                    <div className="col-lg-6" style={{"margin": "0 auto"}}>
                        {message}
                        <img id="gotchi" 
                            src={this.state.user.avatar}
                            onError={this.handleImageError.bind (this)}
                            style={{"width": "150px", "height":"150px"}} className="mx-auto d-block bordered" />
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h3 className="text-secondary">{this.state.first_name} {this.state.last_name}</h3>
                                </div>
                            </div>

                        <input id="avatar" value={this.state.user.avatar} onChange={ e => this.onChange(e)}  type="text"  style={{'margin': '0 auto', 'marginTop': '10px'}} 
                        className="form-control" placeholder="Avatar Url (ex. http://www.mydomain.com/image.png)" />
                    
                    
                        <label htmlFor="firstName">First Name</label>
                        <input value={this.state.user.first_name} onChange={ e => this.onChange(e)} type="text" className="form-control" id="first_name" placeholder="First Name" />

                        <label htmlFor="lastName">Last Name</label>
                        <input value={this.state.user.last_name} onChange={ e => this.onChange(e)} type="text" className="form-control" id="last_name" placeholder="LastName" />
                    </div>
                </div>
                
                <div className="form-row" style={{"marginTop": "10px"}}>
                    <div className="col-lg-6" style={{"margin": "0 auto"}}>
                        <div className="float-right">
                            <Link to="/user" className="btn btn-secondary">Cancel</Link>
                            <button type="button" style={{'marginLeft': '10px'}} className="btn btn-success" data-toggle="modal" data-target="#confirmationModal">
                                {this.state.okButtonText}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <Modal 
                id="confirmationModal" 
                title="Confirmation" 
                message="Are you sure you want to save?" 
                OnOkClicked={this.handleModalClick.bind(this)}
                />
        </div>);
    }

    handleModalClick ()
    {
        console.log ("Handling ok clicked: " + JSON.stringify(this.state.user));
        //let result = store.dispatch (addToUsers (this.state.user, this.successCallback.bind(this), this.errorCallback.bind(this)));
        if (this.state.user.id == 0)
        {
            this.props.addUser (this.state.user, this.successCallback.bind(this), this.errorCallback.bind(this));
        }
        else
        {
            this.props.updateUser (this.state.user, this.successCallback.bind(this), this.errorCallback.bind(this));
        }

        this.setState ({
            ...this.state,
            screenState: "loading"
        });
    }

    successCallback ()
    {
        console.log ("CreateUser successfully, redirecting");
        
        let newState = this.state.user.id == 0
        ?{
            ...this.state,
                user: {
                    ...this.state.user,
                        avatar: "",
                        first_name: "",
                        last_name: ""
                },
                screenState: "created"
        }
        : { ...this.state, screenState: "updated" };

        this.setState (newState);

        setTimeout(() => {
            this.setState ({
                ...this.state,
                screenState: "initial"
            });
        }, 1500);
    }

    errorCallback ()
    {
        this.setState ({
            ...this.state,
            screenState: "error"
        });
    } 
}

export default connect(mapStateToProps, mapDispatchToProps) (UserEdit);