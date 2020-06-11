import React, { Component } from 'react';
import Nav from './Nav.js'


class UserSignUp extends Component{

    render(){
        return(
            <div>
                <Nav 
                   pageType={'interior'}
                />   
            <form class="signup-form">
                <h2>Sign-up for more positivity!</h2>
                <label htmlFor="first-name">First Name</label>
                <input placeholder='First Name' type="text" name='first-name' id='first-name'/>
                <label htmlFor="last-name">Last Name</label>
                <input placeholder="Last Name" type='text' name='last-name' id='last-name'/>
                <label htmlFor="last-name">UserName</label>
                <input placeholder="UserName" type='text' name='username' id='username'/>
                <label htmlFor="email">Email</label>
                <input placeholder="Your Email" type="email" name='email' id='email'/>
                <label htmlFor="password">Password</label>
                <input placeholder="*******" type="password" name='password' id='password'/>
                <button type="submit">Sign Up</button>
            </form>
            <p>Thank you for your interest in our app. This is the beta version so you cannot create an account yet. Please check back soon for our public release.</p>
            </div>
        )
    }
}

export default UserSignUp;
