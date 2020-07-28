import React, { Component } from 'react';
import Nav from './Nav.js';
import FilterButtons from './FilterButtons.js';
import { faPlusSquare} from '@fortawesome/free-regular-svg-icons';
import { faUser, faHome, faInfo } from '@fortawesome/free-solid-svg-icons';


class MyAccount extends Component{

    render(){
        return(
            <div className="account-page">
                <Nav 
                   pageType={'interior'}
                />
                <form className="update-account-form">
                    <h2>My Account</h2>
                    <p>The account information for melinda is below.</p>
                    <p>Please use the form to update your name, email address or password.</p>
                    <div className="form-field-group">
                        <label htmlFor="first-name">First Name</label><br/>
                        <input placeholder='Melinda' type="text" name='first-name' id='first-name'/>
                    </div>
                    <div className="form-field-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input placeholder="Teachey" type='text' name='last-name' id='last-name'/>
                    </div>
                    <div className="form-field-group">
                        <label htmlFor="email">Email</label>
                        <input placeholder="user@gmail.com" type="email" name='email' id='email'/>
                    </div>
                    <div className="form-field-group">
                        <label htmlFor="password">Password</label>
                        <input placeholder="*******" type="password" name='password' id='password'/>
                    </div>
                    <button type="submit">Update</button>
                    <button type="reset">Cancel</button>
                   </form>
                   <FilterButtons
                        buttonInfo={[{ariaLabel:'all users',icon_type:faHome, link:'/dashboard',display_change:'allUsers',tooltipMessage:'view posts',tooltipClass:'top-right'},
                        {aria_label:'my posts',icon_type:faUser, link:'/dashboard', display_change:'user',tooltipMessage:'view your posts',tooltipClass:'top-right'},
                        {aria_label:'add new post',icon_type:faPlusSquare, link:'/new-post', display_change:'all',tooltipMessage:'create a new post',tooltipClass:'top-left'},
                        {aria_label:'learn more',icon_type:faInfo, link:'/learn-more', display_change:'all',tooltipMessage:'learn more about the Uplift app',tooltipClass:'top-farleft'}
                        ]}
                        rowPosition={'row-bottom'}
                    />
            </div>
        )
    }
}

export default MyAccount;
