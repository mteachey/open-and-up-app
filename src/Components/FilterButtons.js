import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faPodcast, faMusic, faBookOpen, faDoorOpen, faHome } from '@fortawesome/free-solid-svg-icons';
import '../_styles/filter.css'

class FilterButtons extends Component{
    render(){
        return(
            <section className="filter-button-row">
                <p><FontAwesomeIcon className="filter-icon" icon={faHome} /></p>
                <p><FontAwesomeIcon className="filter-icon" icon={faLightbulb} /></p>
                <p><FontAwesomeIcon className="filter-icon" icon={faBookOpen} /></p>
                <p><FontAwesomeIcon className="filter-icon" icon={faPodcast} /></p>
                <p><FontAwesomeIcon className="filter-icon" icon={faMusic} /></p>
                <p><FontAwesomeIcon className="filter-icon" icon={faCalendarAlt} /></p>
            </section>
        )
    }
}

export default FilterButtons;