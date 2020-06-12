import React, { Component } from 'react';
import Nav from './Nav.js';
import ButtonRow from './ButtonRow.js';


class MyAccount extends Component{

    render(){
        return(
            <div>
                <Nav 
                   pageType={'interior'}
                />
                <form class="update-account-form">
                    <h2>My Account</h2>
                    <p>The account information for melinda is below.</p>
                    <p>Please use the form to update your name, email address or password.</p>
                    <div class="form-field-group">
                        <label htmlFor="first-name">First Name</label><br/>
                        <input placeholder='Melinda' type="text" name='first-name' id='first-name'/>
                    </div>
                    <div class="form-field-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input placeholder="Teachey" type='text' name='last-name' id='last-name'/>
                    </div>
                    <div class="form-field-group">
                        <label htmlFor="email">Email</label>
                        <input placeholder="user@gmail.com" type="email" name='email' id='email'/>
                    </div>
                    <div class="form-field-group">
                        <label htmlFor="password">Password</label>
                        <input placeholder="*******" type="password" name='password' id='password'/>
                    </div>
                    <button type="submit">Update</button>
                    <button type="reset">Cancel</button>
                   </form>
                   <ButtonRow
                     links ={[{'/dashboard':'Home'},{'/dashboard':'My Posts'},{'/new-post':'New Post'},{'/my-account':'My Account'}]}/>
            </div>
        )
    }
}

export default MyAccount;
