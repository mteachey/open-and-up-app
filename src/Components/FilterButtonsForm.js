import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../_styles/filter.css';
import OpenUpContext from '../OpenUpContext.js';


class FilterButtonsForm extends Component{
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
            const fieldType = buttonInfoObject.field_type;
            const tooltipMessage = buttonInfoObject.tooltipMessage;
            const tooltipClass = buttonInfoObject.tooltipClass;
            
            let button = ( <button
                key={i} 
                aria-label={`button-access ${ariaLabel}`}
                onClick={()=>{this.props.updateFields(fieldType)}}
                className="button-icon-link"
                tooltipMessage = {tooltipMessage}
                tooltipClass = {tooltipClass}
            >
                 <FontAwesomeIcon className="filter-icon" icon={iconType} />
            </button>);
            
            return(button)

        })
                
        return(
            <section className="filter-button-row filter-button-row-form">
                {Buttons}
            </section>
        )
    }
}

export default FilterButtonsForm;