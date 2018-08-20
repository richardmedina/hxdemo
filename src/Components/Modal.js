import React, { Component } from 'react';

export default class Modal extends Component {

    handleOkClick ()
    {
        if (typeof(this.props.OnOkClicked) === 'function')
        {
            this.props.OnOkClicked ();
        }
    }

    setMessage (msg)
    {
        this.message = msg;
    }

    render ()
    {
        let {
            id = "exampleModal",
            title = "Default Title", 
            message = "Default Message",
            OkButtonText = "Continue",
            CancelButtonText = "Cancel",
            OnOkClicked = () => {}
        } = this.props;

        return (
            <div className="modal" id={id} tabIndex="-1" role="dialog" aria-labelledby={`label${id}`} aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`label${id}`}>{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {message}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">{CancelButtonText}</button>
                        <button type="button" onClick={this.handleOkClick.bind(this)} data-dismiss="modal" className="btn btn-success">{OkButtonText}</button>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}