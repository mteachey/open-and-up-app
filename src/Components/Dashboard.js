import React, { Component } from 'react';
import Nav from './Nav.js';
import ResultList from './ResultList.js';
import FilterButtons from './FilterButtons.js';

import SearchRow from './SearchRow';
import OpenUpContext from '../OpenUpContext.js';
import { faCalendarAlt, faLightbulb, faIdCard  } from '@fortawesome/free-regular-svg-icons';
import { faBookmark,faPodcast, faMusic, faBookOpen, faUser, faUsers, faUserFriends } from '@fortawesome/free-solid-svg-icons';


class Dashboard extends Component{
    static contextType = OpenUpContext;


    render(){
        return(
            <div className="dashboard">
                <header>
                <Nav 
                   pageType={'interior'}
                />
                 <FilterButtons
                        buttonInfo={[{ariaLabel:'all types of posts',icon_type:'text-all', display_change:'all', link:'/dashboard',tooltipMessage:'view posts of all types ',tooltipClass:'bottom-farright'},
                        {aria_label:'reflection posts',icon_type:faLightbulb, link:'/dashboard',
                        display_change:'reflection', tooltipMessage:'view only reflection posts', tooltipClass:'bottom-right'},
                        {aria_label:'book posts',icon_type:faBookOpen, link:'/dashboard',
                        display_change:'book', tooltipMessage:'view only book posts',tooltipClass:'bottom-center'},
                        {aria_label:'podcast posts',icon_type:faPodcast, link:'/dashboard',
                        display_change:'podcast',tooltipMessage:'view only podcast posts',tooltipClass:'bottom-center'},
                        {aria_label:'music posts',icon_type:faMusic, link:'/dashboard',
                        display_change:'music',tooltipMessage:'view only music posts',tooltipClass:'bottom-left'},
                        {aria_label:'event posts',icon_type:faCalendarAlt, link:'/dashboard',
                        display_change:'event',tooltipMessage:'view only event posts',tooltipClass:'bottom-farleft'}]}
                        heading={'Filter Posts By Type'}
                    />
                </header>
                <main>
                   
                    
                    <ResultList
                      heading = {'Posts'}
                       postsToDisplay = {'posts'}
                       posts = {this.context.posts}
                    />
                </main>
                <section className="bottom-filter-row">
                    <FilterButtons
                            buttonInfo={[{ariaLabel:'all users',icon_type:faUsers, link:'/dashboard',display_change:'allUsers',tooltipMessage:'view all posts of all users', tooltipClass:'top-farright'},
                            {ariaLabel:'all users you follow',icon_type:faUserFriends, link:'/dashboard',display_change:'followees',tooltipMessage:'view all posts of your connections',tooltipClass:'top-right'},
                            {aria_label:'my posts',icon_type:faUser, link:'/dashboard', display_change:'user',tooltipMessage:'view all your posts',tooltipClass:'top-center'},
                            {aria_label:'view bookmarks',icon_type:faBookmark, link:'/bookmarks', display_change:'all', tooltipMessage:'view all your bookmarked posts',tooltipClass:'top-left'},
                            {aria_label:'my account',icon_type:faIdCard, link:'/my-account',display_change:'all',tooltipMessage:'update your account info',tooltipClass:'top-farleft'}
                            ]}
                        
                        />
                    </section>
                    <section className="search-row-section">
                        <SearchRow/>
                    </section>
                
            </div>
        )
    }
}

export default Dashboard;
