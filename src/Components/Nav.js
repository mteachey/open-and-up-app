import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconButton from './IconButton.js';
import { faPlusSquare} from '@fortawesome/free-regular-svg-icons';
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
                    tooltipMessage = {'create a new post'}
                    tooltipClass={'bottom-right'}
                />
                <h1><Link className="site-heading" to={'/dashboard'}>Uplift</Link></h1>
                <IconButton
                    link={'/learn-more'}
                    aria-label={`button-access learn more page`}
                    displayChange={'all'}
                    iconType={faInfo}
                    buttonColor={'orange-background'}
                    tooltipMessage = {'learn more about the Uplift app'}
                    tooltipClass={'bottom-left'}
                />
            </nav>)}

        if(this.props.pageType === 'home'){
         List = (
            <div className="home-nav-links">
                <button className="nav-link" onClick={this.props.onSignUpInClick}>Sign-in</button>
                <button className="nav-link" onClick={this.props.onSignUpInClick}>Sign-up</button>
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
