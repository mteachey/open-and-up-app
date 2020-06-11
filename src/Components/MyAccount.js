import React, { Component } from 'react';
import Nav from './Nav.js'


class MyAccount extends Component{

    render(){
        return(
            <div>
                <Nav 
                   pageType={'interior'}
                />
                <p>My Account</p>
            </div>
        )
    }
}

export default MyAccount;
