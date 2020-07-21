import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import IconButton from './IconButton.js';
import { faPlusSquare, faInfoSquare} from '@fortawesome/free-regular-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';


class Nav extends Component{
   
    render(){
        let List="";
        if (this.props.pageType === 'interior'){
         List = ( 
            <nav className="main-nav nav">
                <IconButton
                    link={'/new-post'}
                    aria-label={`button-access add new post`}
                    displayChange={'all'}
                    iconType={faPlusSquare}
                    buttonColor={'orange-background'}
                />
                <h1><Link className="site-heading" to={'/dashboard'}>Uplift</Link></h1>
                <IconButton
                    link={'/learn-more'}
                    aria-label={`button-access learn more page`}
                    displayChange={'all'}
                    iconType={faInfo}
                    buttonColor={'orange-background'}
                />
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
