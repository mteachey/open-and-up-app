import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../_styles/filter.css';
import { Link } from 'react-router-dom';
import OpenUpContext from '../OpenUpContext.js'

class FilterButtons extends Component{
    static defaultProps ={
        buttonInfo:[],
        ariaLabel:'',
        icon_type:'',
        post_type:'',
       };

    static contextType=OpenUpContext;

    render(){
     
        let buttons=this.props.buttonInfo;

        const Buttons = buttons.map((buttonInfoObject,i)=>{

            const ariaLabel= buttonInfoObject.aria_label;
            const iconType = buttonInfoObject.icon_type;
            const link = buttonInfoObject.link;
            const displayChange = buttonInfoObject.display_change;
            
            let button = (<button></button>)

            if(iconType==='text-all'){
                button = (<Link 
                    key={i} 
                    to={link}
                    aria-label={`button-access ${ariaLabel}`}
                    onClick={e=>{this.context.updatePostType(displayChange); this.context.updateUsernameToDisplay(displayChange);}}
                    className="button-icon-link button-w-text"
                >
                All
                </Link>);
            }

           // if(displayChange){
            else{
                button = (<Link 
                    key={i} 
                    to={link}
                    aria-label={`button-access ${ariaLabel}`}
                    onClick={e=>{this.context.updatePostType(displayChange); this.context.updateUsernameToDisplay(displayChange);}}
                    className="button-icon-link"
                >
                <FontAwesomeIcon className="filter-icon" icon={iconType} />
                </Link>);
            }
                
            return(button)

        })
            
        return(
            <section className="filter-button-row">
                <h2>{this.props.heading}</h2>
                <div className="button-row">
                  {Buttons}
                </div>
            </section>
        )
    }
}

export default FilterButtons;