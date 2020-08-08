import React, { Component } from 'react';
import Nav from './Nav.js';
import FilterButtons from './FilterButtons.js';
import { faPlusSquare} from '@fortawesome/free-regular-svg-icons';
import { faUser, faHome, faInfo } from '@fortawesome/free-solid-svg-icons';


class MyAccount extends Component{

    state = {
        isBoxVisible:false,
    }

    BetaVersionPopUp=(e)=>{
        e.preventDefault();
        this.setState({ isBoxVisible: true });
    }
    closeWindow=()=>{
        this.setState({ isBoxVisible: false });
    }

    render(){
        return(
            <div className="account-page">
                <Nav 
                   pageType={'interior'}
                />
                 <div className={`box beta-version-box ${this.state.isBoxVisible ? "" : "hidden"}`}>
                        <p>Since this is still the Beta version of the app, you cannot update account information. Please check back soon to be able to sign-up and update your account whenever!</p>
                        <button 
                            className="button" 
                            onClick={this.closeWindow}>
                            Close
                        </button>
                </div> 
                <form className="update-account-form" onSubmit={e=>this.BetaVersionPopUp(e)}>
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
                    <button type="reset" onClick={this.BetaVersionPopUp}>Cancel</button>
                   </form>
                   <FilterButtons
                        buttonInfo={[{ariaLabel:'all users',icon_type:faHome, link:'/dashboard',display_change:'allUsers',tooltipMessage:'view posts',tooltipClass:'top-right'},
                        {ariaLabel:'my posts',icon_type:faUser, link:'/dashboard', display_change:'user',tooltipMessage:'view your posts',tooltipClass:'top-right'},
                        {ariaLabel:'add new post',icon_type:faPlusSquare, link:'/new-post', display_change:'all',tooltipMessage:'create a new post',tooltipClass:'top-left'},
                        {ariaLabel:'learn more',icon_type:faInfo, link:'/learn-more', display_change:'all',tooltipMessage:'learn more about the Uplift app',tooltipClass:'top-farleft'}
                        ]}
                        rowPosition={'row-bottom-all-screen'}
                    />
            </div>
        )
    }
}

export default MyAccount;
