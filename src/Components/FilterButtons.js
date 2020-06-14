import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faPodcast, faMusic, faBookOpen, faHome } from '@fortawesome/free-solid-svg-icons';
import '../_styles/filter.css';
import OpenUpContext from '../OpenUpContext.js'

class FilterButtons extends Component{
    static defaultProps ={
        ariaLabel1:'',
        icon_type1:'',
        post_type1:'',
        ariaLabel2:'',
        icon_type2:'',
        post_type2:'',
        ariaLabel3:'',
        icon_type3:'',
        post_type3:'',   
        ariaLabel4:'',
        icon_type4:'',
        post_type4:'',
        ariaLabel5:'',
        icon_type5:'',
        post_type5:'',
        ariaLabel6:'',
        icon_type6:'',
        post_type6:'',
       };

    static contextType=OpenUpContext;

    render(){
     
        let buttons=this.props.buttonInfo;

        const Buttons = buttons.map((buttonInfoObject,i)=>{
            const ariaLabel= buttonInfoObject.aria_label;
            const iconType = buttonInfoObject.icon_type;
            const postType = buttonInfoObject.post_type;

            return(<button 
                        key={i} 
                        aria-label={`button-access ${ariaLabel}`}
                        onClick={e=>this.context.updatePostType(postType)}
                    >
                    <FontAwesomeIcon className="filter-icon" icon={iconType} />
                    </button>)

                    })

        return(
            <section className="filter-button-row">
                {Buttons}
                <button 
                    className="filter-button icon-button" 
                    aria-label="button-access all types of posts"
                    onClick = {e=>this.context.updatePostType('all')}
                
                >
                    <FontAwesomeIcon className="filter-icon" icon={faHome} />
                </button>
                <button 
                    className="filter-button icon-button" 
                    aria-label="button-access reflection posts"
                    onClick = {e=>this.context.updatePostType('reflection')}
                >
                    <FontAwesomeIcon className="filter-icon" icon={faLightbulb} />
                </button>
                <button 
                    className="filter-button icon-button" 
                    aria-label="button-access book posts"
                    onClick = {e=>this.context.updatePostType('book')}
                >
                    <FontAwesomeIcon className="filter-icon" icon={faBookOpen} />
                </button>
                <button 
                    className="filter-button icon-button" 
                    aria-label="button-access podcast posts"
                    onClick = {e=>this.context.updatePostType('podcast')}
                >
                    <FontAwesomeIcon className="filter-icon" icon={faPodcast} />
                </button>
                <button 
                    className="filter-button icon-button" 
                    aria-label="button-access music posts"
                    onClick = {e=>this.context.updatePostType('music')}
                >
                    <FontAwesomeIcon className="filter-icon" icon={faMusic} />
                </button>
                <button 
                    className="filter-button icon-button" 
                    aria-label="button-access event posts"
                    onClick = {e=>this.context.updatePostType('event')}
                >
                    <FontAwesomeIcon className="filter-icon" icon={faCalendarAlt} />
                </button>
            </section>
        )
    }
}

export default FilterButtons;