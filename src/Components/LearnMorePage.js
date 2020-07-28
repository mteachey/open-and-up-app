import React, { Component } from 'react';
import Nav from './Nav.js';
import FilterButtons from './FilterButtons.js';
import { faIdCard, faPlusSquare} from '@fortawesome/free-regular-svg-icons';
import { faUser, faHome} from '@fortawesome/free-solid-svg-icons';
import LearnMoreContent from './LearnMoreContent'

class LearnMorePage extends Component{

    render(){
        return(
            <div className="learn-more-page">
                <Nav 
                   pageType={'interior'}
                />
                <main>
                    <LearnMoreContent/>
                </main>
                <footer>
                <FilterButtons
                        buttonInfo={[{ariaLabel:'all users',icon_type:faHome, link:'/dashboard',display_change:'allUsers', tooltipMessage:'view posts',tooltipClass:'top-farright'},
                        {aria_label:'my posts',icon_type:faUser, link:'/dashboard', display_change:'user',tooltipMessage:'view your posts', tooltipClass:'top-center'},
                        {aria_label:'my account',icon_type:faIdCard, link:'/my-account',display_change:'all',tooltipMessage:'view posts of all users',tooltipClass:'top-left'},
                        {aria_label:'update your account info',icon_type:faPlusSquare, link:'/new-post', display_change:'all',tooltipMessage:'create a new post',tooltipClass:'top-farleft'}
                        ]}
                        rowPosition={'row-top'}
                    
                    />
                </footer>
            </div>
        )

    }    
}

export default LearnMorePage;
