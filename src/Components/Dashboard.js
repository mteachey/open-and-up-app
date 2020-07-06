import React, { Component } from 'react';
import Nav from './Nav.js';
import ResultList from './ResultList.js';
import FilterButtons from './FilterButtons.js';
import SearchRow from './SearchRow';
import OpenUpContext from '../OpenUpContext.js';
import { faCalendarAlt, faLightbulb, faPlusSquare, faIdCard  } from '@fortawesome/free-regular-svg-icons';
import { faPodcast, faMusic, faBookOpen, faHome, faUser, faUsers, faUserFriends } from '@fortawesome/free-solid-svg-icons';




class Dashboard extends Component{
    static contextType = OpenUpContext;


    render(){
        return(
            <div>
                <header>
                <Nav 
                   pageType={'interior'}
                />
                </header>
                <main>
                    <FilterButtons
                        buttonInfo={[{ariaLabel:'all types of posts',icon_type:faHome, display_change:'all', link:'/dashboard'},
                        {aria_label:'reflection posts',icon_type:faLightbulb, link:'/dashboard',
                        display_change:'reflection'},
                        {aria_label:'book posts',icon_type:faBookOpen, link:'/dashboard',
                        display_change:'book'},
                        {aria_label:'podcast posts',icon_type:faPodcast, link:'/dashboard',
                        display_change:'podcast'},
                        {aria_label:'music posts',icon_type:faMusic, link:'/dashboard',
                        display_change:'music'},
                        {aria_label:'event posts',icon_type:faCalendarAlt, link:'/dashboard',
                        display_change:'event'}]}
                    />
                    <SearchRow/>
                    <ResultList
                      heading = {'Posts'}
                       postsToDisplay = {'posts'}
                       posts = {this.context.posts}
                    />
                </main>
                <footer>
                <FilterButtons
                        buttonInfo={[{ariaLabel:'all users',icon_type:faUsers, link:'/dashboard',display_change:'allUsers'},
                        {ariaLabel:'all users you follow',icon_type:faUserFriends, link:'/dashboard',display_change:'followees'},
                        {aria_label:'my posts',icon_type:faUser, link:'/dashboard', display_change:'user'},
                        {aria_label:'my account',icon_type:faIdCard, link:'/my-account',display_change:'all'},
                        {aria_label:'add new post',icon_type:faPlusSquare, link:'/new-post', display_change:'all'}
                        ]}
                    
                    />
                </footer>
            </div>
        )
    }
}

export default Dashboard;
