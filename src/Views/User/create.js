import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../Components/Modal';

export default class UserCreate extends Component {

    constructor ()
    {
        super ();
        this.state = {
            avatar_url : ""
        };
    }

    handleBlur(event) {
        console.log ("Blur: " + event.target.value);
        this.setState({avatar_url: event.target.value});
    }

    render ()
    {
        return (
        <div>
            <h1>User New</h1>
            <div className="row">
                <div className="col-lg-12">
                    <Link className="btn btn-link" to={`/user`}>Go Back</Link>
                </div>
            </div>

            <form>
                <div className="form-group text-center">
                    {/* <object style={{"width": "150px", "height":"150px"}} 
                        data={this.state.avatar_url}
                        type="image/png"> */}
                        <img id="gotchi" className="mx-auto d-block" width="150" 
                        src={this.state.avatar_url} />    
                        {/* <img src="https://appharbor.com/assets/images/stackoverflow-logo.png" /> */}
                    {/* </object> */}
                    
                    
                    {/* <label htmlFor="avatar">Avatar</label> */}
                    <input onBlur={this.handleBlur.bind (this)} type="text" 
                    style={{'margin': '0 auto', 'marginTop': '10px', width: '70%'}} 
                    className="form-control" id="avatar" placeholder="Avatar Url (ex. http://www.mydomain.com/image.png)" />
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="first_name" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="last_name" placeholder="LastName" />
                    </div>
                </div>
                
                
                <div className="float-right">
                    <button type="button" className="btn btn-seconday">Cancel</button>
                    <button type="button" style={{'marginLeft': '10px'}} 
                    className="btn btn-success"
                    data-toggle="modal" data-target="#confirmationModal">Create</button>
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
    }

    mapStateToProps = state => {
        return (state);
    }

    mapDispatchToProps = dispatch => {

    };

}