import React, { Component } from 'react';

export default class Modal extends Component {

    constructor ({
        id = "exampleModal",
        title = "Default Title", 
        message = "Default Message",
        OkButtonText = "Continue",
        CancelButtonText = "Cancel",
        OnOkClicked
    })
    {
        super ();

        this.state = {
            id: id,
            visible: true,
            title,
            message,
            OkButtonText,
            CancelButtonText,
            OnOkClicked
        }
    }

    setModal (visible, title, message)
    {
        this.setState (...this.state, {
            visible: visible,
            title: title,
            message: message
        });
    }

    handleOkClick ()
    {
        if (typeof(this.state.OnOkClicked) === 'function')
        {
            this.state.OnOkClicked ();
        }
    }

    render ()
    {
        return (
            <div>
            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#${this.state.id}`}>
            Launch demo modal
            </button> */}

            <div className="modal fade" id={this.state.id} tabIndex="-1" role="dialog" aria-labelledby={`label${this.state.id}`} aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id={`label${this.state.id}`}>{this.state.title}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {this.state.message}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">{this.state.CancelButtonText}</button>
                    <button type="button" onClick={this.handleOkClick.bind(this)} data-dismiss="modal" className="btn btn-success">{this.state.OkButtonText}</button>
                </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}