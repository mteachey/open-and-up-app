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

           // if(displayChange){
                button = (<Link 
                    key={i} 
                    to={link}
                    aria-label={`button-access ${ariaLabel}`}
                    onClick={e=>this.context.updatePostType(displayChange)}
                    className="button-icon-link"
                >
                <FontAwesomeIcon className="filter-icon" icon={iconType} />
                </Link>);
                
          //  }
          /*  else if(link){
                button = (<Link 
                    key={i} 
                    aria-label={`link-access ${ariaLabel}`}
                    to={link}
                    className="button-icon-link"
                >
                <FontAwesomeIcon className="filter-icon" icon={iconType} />
                </Link>);
                
            };*/

            return(button)

        })
                

        return(
            <section className="filter-button-row">
                {Buttons}
            </section>
        )
    }
}

export default FilterButtons;