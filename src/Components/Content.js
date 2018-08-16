import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component 
{

    render () 
    {
        const { body } = this.props;
        return (
            <div>
                {body}
            </div>
        );
    }
} 

export default Content;