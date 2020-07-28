import React, { Component } from 'react';
import Nav from './Nav.js';
import ResultList from './ResultList.js';
import FilterButtons from './FilterButtons.js';
import OpenUpContext from '../OpenUpContext.js';
import { faCalendarAlt, faLightbulb, faPlusSquare, faIdCard  } from '@fortawesome/free-regular-svg-icons';
import { faPodcast, faMusic, faBookOpen, faUser, faUsers, faUserFriends } from '@fortawesome/free-solid-svg-icons';



class BookmarkPage extends Component{
    static contextType = OpenUpContext;

    render(){
        return(
            <div className="bookmark-results">
                <header>
                <Nav 
                   pageType={'interior'}
                />
                <FilterButtons
                        buttonInfo={[{ariaLabel:'all types of posts',icon_type:'text-all', display_change:'all', link:'/dashboard',tooltipMessage:'view posts of all types',tooltipClass:'bottom-farright'},
                        {aria_label:'reflection posts',icon_type:faLightbulb, link:'/bookmarks',
                        display_change:'reflection', tooltipMessage:'view only reflection posts',tooltipClass:'bottom-right'},
                        {aria_label:'book posts',icon_type:faBookOpen, link:'/bookmarks',
                        display_change:'book', tooltipMessage:'view only book posts',tooltipClass:'bottom-center'},
                        {aria_label:'podcast posts',icon_type:faPodcast, link:'/bookmarks',
                        display_change:'podcast', tooltipMessage:'view only podcast posts',tooltipClass:'bottom-center'},
                        {aria_label:'music posts',icon_type:faMusic, link:'/bookmarks',
                        display_change:'music', tooltipMessage:'view only music posts',tooltipClass:'bottom-left'},
                        {aria_label:'event posts',icon_type:faCalendarAlt, link:'/bookmarks',
                        display_change:'event', tooltipMessage:'view only event posts', tooltipClass:'bottom-farleft'}]}
                        rowPosition={'row-top'}/>
                </header>
                <main>
                    
                    <ResultList
                       heading = {'Your Bookmarks'}
                       postsToDisplay = {'bookmarks'}
                       posts = {this.context.bookmarks}
                     />
                </main>
                <FilterButtons
                        buttonInfo={[{ariaLabel:'all users',icon_type:faUsers, link:'/dashboard',display_change:'allUsers', tooltipMessage:'view posts of all users',tooltipClass:'top-farright'},
                        {ariaLabel:'all users you follow',icon_type:faUserFriends, link:'/dashboard',display_change:'followees',tooltipMessage:'view posts of your connections',tooltipClass:'top-right'},
                        {aria_label:'my posts',icon_type:faUser, link:'/dashboard', display_change:'user', tooltipMessage:'view your posts',tooltipClass:'top-center'},
                        {aria_label:'my account',icon_type:faIdCard, link:'/my-account',display_change:'all', tooltipMessage:'update your account info',tooltipClass:'top-left'},
                        {aria_label:'add new post',icon_type:faPlusSquare, link:'/new-post', display_change:'all',tooltipMessage:'create a new post',tooltipClass:'top-farleft'}
                        ]}
                        rowPosition={'row-bottom'}
                    />
            </div>
        )
    }
}

export default BookmarkPage;
