import React, { Component } from 'react';
import Nav from './Nav.js';
import ResultList from './ResultList.js';
import FilterButtons from './FilterButtons.js';
import OpenUpContext from '../OpenUpContext.js';
import { faCalendarAlt, faLightbulb, faPlusSquare, faIdCard  } from '@fortawesome/free-regular-svg-icons';
import { faPodcast, faMusic, faBookOpen, faHome, faUser, faUsers, faUserFriends } from '@fortawesome/free-solid-svg-icons';



class BookmarkPage extends Component{
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
                        buttonInfo={[{ariaLabel:'all types of posts',icon_type:faHome, display_change:'all', link:'/bookmarks'},
                        {aria_label:'reflection posts',icon_type:faLightbulb, link:'/bookmarks',
                        display_change:'reflection'},
                        {aria_label:'book posts',icon_type:faBookOpen, link:'/bookmarks',
                        display_change:'book'},
                        {aria_label:'podcast posts',icon_type:faPodcast, link:'/bookmarks',
                        display_change:'podcast'},
                        {aria_label:'music posts',icon_type:faMusic, link:'/bookmarks',
                        display_change:'music'},
                        {aria_label:'event posts',icon_type:faCalendarAlt, link:'/bookmarks',
                        display_change:'event'}]}/>
                    <ResultList
                       heading = {'Your Bookmarks'}
                       postsToDisplay = {'bookmarks'}
                       posts = {this.context.bookmarks}
                     />
                </main>
                <footer>
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
                </footer>
            </div>
        )
    }
}

export default BookmarkPage;
