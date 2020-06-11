import React, { Component } from 'react';
import Nav from './Nav.js'


class UserSignUp extends Component{

    render(){
        return(
            <div>
                <Nav 
                   pageType={'interior'}
                />
                <p>UserSignUp</p>
            </div>
        )
    }
}

export default UserSignUp;
