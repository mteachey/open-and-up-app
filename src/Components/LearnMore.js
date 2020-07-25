import React, { Component } from 'react';
import Nav from './Nav.js';
import FilterButtons from './FilterButtons.js';
import { faIdCard, faPlusSquare} from '@fortawesome/free-regular-svg-icons';
import { faUser, faHome} from '@fortawesome/free-solid-svg-icons';


class LearnMore extends Component{

    render(){
        return(
            <div className="learn-more-page">
                <Nav 
                   pageType={'interior'}
                />
                <main>
                <h2>How do you use Uplift?</h2>
                    <p>This app works like many social media apps. Once logged in, you will be taken to a screen of posts from people you follow and your own.</p>
                    <p>You can filter the post by type of post, such as books or reflections. You can choose to see posts by all users or just your posts.  You can also see only post that you have bookmarked.</p>
                    <p>When viewing your bookmarks, each post will also include a space to write, save, and edit comments you have about that posts. These comments are only for you and are not visible to any other users.</p>
                    <p>For this early version, you can not edit your posts once they have been created, but you can delete your posts and then try again.  Editing your posts will be coming soon!</p>
                    <FilterButtons
                        buttonInfo={[{ariaLabel:'all users',icon_type:faHome, link:'/dashboard',display_change:'allUsers', tooltipMessage:'view posts'},
                        {aria_label:'my posts',icon_type:faUser, link:'/dashboard', display_change:'user',tooltipMessage:'view your posts'},
                        {aria_label:'my account',icon_type:faIdCard, link:'/my-account',display_change:'all',tooltipMessage:'view posts of all users'},
                        {aria_label:'update your account info',icon_type:faPlusSquare, link:'/new-post', display_change:'all',tooltipMessage:'create a new post'}
                        ]}
                    
                    />
                </main>
            </div>
        )
    }
}

export default LearnMore;
