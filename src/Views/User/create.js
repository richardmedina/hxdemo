import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../Components/Modal';
import store from '../../store';
import { addToUsers } from '../../ActionCreators/Users';

export default class UserCreate extends Component {

    constructor (props)
    {
        super ();
        //console.log ("create props ctor: " + JSON.stringify(this.props));

        let p = props.location.props;
        console.log ("P: " + JSON.stringify(p));

        if (p) 
        {
            this.state = {...p, okButtonText: 'Update'};
        } else 
        {
            this.state = {
                id : '',
                first_name: '',
                last_name: '',
                avatar: '',
                okButtonText: 'Create'
            };
        }
    }

    // componentDidMount ()
    // {
    //     console.log ("aa: " + JSON.stringify(this.props));
    //     this.setState (this.props.location.props);
    // }

    handleBlur(event) {
        this.setState({avatar: event.target.value});
    }

    handleImageError (event)
    {
        console.log('target: ' + JSON.stringify(event.target.src));
        event.target.src = '/noimage.png';
    }

    onChange (event)
    {
        this.setState ({
            [event.target.id] : event.target.value
        });
    }

    render ()
    {
        console.log ("create props: " + JSON.stringify(this.props));
        return (
        <div>
            <h1>User New</h1>
            <div className="row">
                <div className="col-lg-12">
                    <Link className="btn btn-link" to={`/user`}>Go Back</Link>
                </div>
            </div>

            <form className="form-group">
                {/* <div className="centered">
                    <img id="gotchi" src={this.state.avatar_url} style={{"width": "150px", "height":"150px"}} className="mx-auto d-block bordered" />
                    <input onBlur={this.handleBlur.bind (this)} type="text"  style={{'margin': '0 auto', 'marginTop': '10px'}} 
                    className="form-control" id="avatar" placeholder="Avatar Url (ex. http://www.mydomain.com/image.png)" />
                </div> */}

                <div className="form-row">
                    <div className="col-lg-6" style={{"margin": "0 auto"}}>
                        <img id="gotchi" 
                            src={this.state.avatar}
                            onError={this.handleImageError.bind (this)}
                            style={{"width": "150px", "height":"150px"}} className="mx-auto d-block bordered" />
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h3 className="text-secondary">{this.state.first_name} {this.state.last_name}</h3>
                                </div>
                            </div>

                        <input id="avatar" value={this.state.avatar} onChange={ e => this.onChange(e)} onBlur={this.handleBlur.bind (this)} type="text"  style={{'margin': '0 auto', 'marginTop': '10px'}} 
                        className="form-control" placeholder="Avatar Url (ex. http://www.mydomain.com/image.png)" />
                    
                    
                        <label htmlFor="firstName">First Name</label>
                        <input value={this.state.first_name} onChange={ e => this.onChange(e)} type="text" className="form-control" id="first_name" placeholder="First Name" />

                        <label htmlFor="lastName">Last Name</label>
                        <input value={this.state.last_name} onChange={ e => this.onChange(e)} type="text" className="form-control" id="last_name" placeholder="LastName" />
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
                OnOkClicked={this.handleModalClick.bind (this)}
                />
        </div>);
    }

    handleModalClick ()
    {
        console.log ("Handling ok clicked");
        store.dispatch (addToUsers (this.state));
    }
}