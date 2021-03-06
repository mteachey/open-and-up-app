import React, { Component } from 'react';
import bookmark from '../images/uplift-bookmark-ui.jpg';
import bookmarkcontent from '../images/uplift-bookmarks-content-ui.jpg';
import dashboard from '../images/uplift-dashboard-ui.jpg';
import bookmarkbutton from '../images/uplift-dashboard-w-bookmarkbutton-ui.jpg';
import filterbuttons from '../images/uplift-dashboard-w-filter-ui.jpg';
import newpostmusic from '../images/uplift-newpost-music-ui.jpg';
import newpost from '../images/uplift-newpost-ui.jpg';
import yourpost from '../images/uplift-yourposts-ui.jpg';
import filteruser from '../images/uplift-dashboard-filteruser-ui.jpg';
import buttontobookmark from '../images/uplift-dashboard-w-buttontobookmarkpost-ui.jpg';
import createpost from '../images/uplift-dashboard-w-createpost-ui.jpg';
import makeconnection from '../images/uplift-dashboard-addconnection-ui.jpg';
import deletepost from '../images/uplift-delete-post-ui.jpg';



class LearnMoreContent extends Component{

    render(){
        return(
            <section className="learnmore">
                <h2>How do you use Uplift?</h2>
                <div className="learnmore-section">
                    <p>This app works like many social media apps. Once logged in, you will be taken to your dashboard which contains a screen of posts from people you follow (your connections) and your own posts.</p>
                    <img src={dashboard} alt='ui of user dashboard'/>
                    
                </div>
                <div className="learnmore-section">
                    <p>You can bookmark posts to save.</p>
                    <img src={buttontobookmark} alt='ui of user dashboard indicating button to save bookmark posts'/>
                </div>
                <div className="learnmore-section">
                    <p>Then view your bookmarked posts by clicking on the bookmark icon on the bottom of the screen.</p>
                    <img src={bookmarkbutton} alt='ui of user dashboard indicating button to view bookmark posts'/>
                </div>
                <div className="learnmore-section">
                   <p>View of your bookmarks</p>
                   <img src={bookmark} alt="ui of posts user has bookmarked"/>
                </div>
                <div className="learnmore-section">
                    <p>When viewing your bookmarks, each post will also include a space to write, save, and edit comments you have about that post. These comments are only for you and are not visible to any other users.</p>
                    <img src={bookmarkcontent} alt='ui of posts user has bookmarked with comment field displayed'/>
                </div>
                <div className="learnmore-section">
                    <p>You can filter the posts in both the dashboard and bookmark views by type of post, such as books or podcasts. </p>
                    <img src={filterbuttons}  alt='ui of filter buttons at top in dahboard view'/>
                </div>
                <div className="learnmore-section">
                    <p>You can choose to view posts by all users, posts of just your connections (people you follow), or just the posts you created by clicking the icons on the bottom of the screen.</p>
                    <img src={filteruser}  alt='ui of buttons on bottom of screen to use to view posts of all users, connections, or your own'/>
                </div>
                <div className="learnmore-section">
                    <p>View of your posts</p>
                    <img src={yourpost}  alt='ui of posts of user'/>
                </div>
                <div className="learnmore-section">
                    <p>You can click the icon beside a user's name to make them a connection or to remove them from being a connection. The icon of two people means that user is already one of your connections, the icon of one person (beside the user's name) means they are not.</p>
                    <img src={makeconnection}  alt='ui of icon to click to add or remove a connection'/>
                </div>
                <div className="learnmore-section">
                    <p>You can create a new post by clicking on the plus icon at the top of the screen (and sometimes on the bottom of the screen).</p>
                    <img src={createpost}  alt='ui of button at top left of screen to click to create a new post'/>
                </div>
                <div className="learnmore-section">
                    <p>On the new post form, you can use the buttons at the top of the form to select the type of post you would like to create - reflection, music, podcast, book, or event. This will change the form fields to match that type of post.</p>
                    <img src={newpost}  alt='ui of form to create a new post'/>
                </div>
                <div className="learnmore-section">
                    <p>New music post form</p>
                    <img src={newpostmusic}  alt='ui of form to create a new music post'/>
                </div>
                <div className="learnmore-section">
                    <p>For this early version, you can not edit your posts once they have been created, but you can delete your posts then try again. To delete a post, go to your post view by clicking on the icon of a single person. On this screen view, your posts should have a delete button. Editing your posts will be coming in future versions soon!</p>
                    <img src={deletepost} alt='ui of delete button to delete a post'/>
                </div>
            </section>
        )
    }
}

export default LearnMoreContent;
