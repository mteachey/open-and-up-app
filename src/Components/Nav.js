import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';


class Nav extends Component{
    


    render(){
        let List="";
        if (this.props.pageType === 'interior'){
         List = ( 
            <nav className="main-nav nav">
                <h1><Link className="site-heading" to={'/dashboard'}>Open and Up</Link></h1>
                <ul className="nav-list">
                    <li><NavLink to={`/dashboard`}>Dashboard</NavLink></li>
                    <li><NavLink to={`/learn-more`}>Learn More</NavLink></li>
                    <li><NavLink to={`/user-signup`}>Sign Up</NavLink></li>
                    <li><NavLink to={`/new-post`}>New Post</NavLink></li>
                    <li><NavLink to={`/my-account`}>My Account</NavLink></li>
                    <li><NavLink to={`/`}>Start Screen</NavLink></li>
                </ul>
            </nav>)}

        if(this.props.pageType === 'home'){
         List = (
            <div className="home-nav-links">
            <button className="nav-link" onClick={this.props.onSignUpInClick}>Sign-up</button>
            <button className="nav-link" onClick={this.props.onSignUpInClick}>Sign-in</button>
        </div>)
            }

        return(
            <div>
                {List}
            </div>
        )
    }
}   
export default Nav;
