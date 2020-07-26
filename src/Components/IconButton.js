import React, {Component} from 'react';
import OpenUpContext from '../OpenUpContext.js';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from './Tooltip';

class IconButton extends Component{
    static contextType = OpenUpContext;


    render(){
    //change the icon depending if on the dashboard or bookmark page
    const {ariaLabel, iconType, displayChange, link, buttonColor,tooltipMessage, tooltipClass} = this.props;
    
    let tooltip =(<Tooltip message={`${tooltipMessage}.`} positionClass={tooltipClass}/>)


    let button = (<button></button>)
    if(iconType==='text-all'){
        button = (<Link 
                      to={link}
                      aria-label={`button-access ${ariaLabel}`}
                      onClick={e=>{this.context.updatePostType(displayChange); this.context.updateUsernameToDisplay(displayChange);}}
                      className={`button-icon-link button-w-text ${buttonColor}`}
                  >
                      All
                      {tooltip}
                  </Link>)}
    else{
      button = (<Link 
                    
                    to={link}
                    aria-label={`button-access ${ariaLabel}`}
                    onClick={e=>{this.context.updatePostType(displayChange); this.context.updateUsernameToDisplay(displayChange);}}
                    className={`button-icon-link ${buttonColor}`}
                >
                    <FontAwesomeIcon className="filter-icon" icon={iconType} />
                    {tooltip}
                </Link>)}
    
    return(
                <div className="icon-button-container">
                    {button}
                </div>
    )
  }
}

export default IconButton;