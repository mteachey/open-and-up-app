import React, { Component } from 'react';
import '../libraries/fontawesome.js';
import '../_styles/posts.css';
import DeletePost from'./DeletePost';
import DeleteConnection from './DeleteConnection'
import AddBookmark from './AddBookmark';
import AddConnection from './AddConnection'
import DeleteBookmark from './DeleteBookmark.js';
import UpdateBookmark from './UpdateBookmark'
import OpenUpContext from '../OpenUpContext.js';
import { isCurrentlyBookmarked } from '../Functions/GetConnectionId'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faPodcast, faMusic, faBookOpen} from '@fortawesome/free-solid-svg-icons';

class SinglePost extends Component{
    static contextType=OpenUpContext;

    static defaultProps = {
        history: {
          goBack: () => { }
        },
        match: {
          params: {}
        }
      }

    render(){

        const{post_id, post_type, title, by, link, content, username, user_id, bookmark_content, bookmark_id, image_path} = this.props;
        const allPostInfo = this.props.postInfo;
        const currentUserId = this.context.currentUserInfo.user_id;
        let listItem ='';
        let button ='';
        let form ='';
        let icon =faMusic;
        let uploadedImage ='';
        let bookmarkButton ='';
        let connectionButton ='';
        let currentUser = this.context.currentUserInfo.username;
        let currentDisplay= this.context.currentDisplay;
        let currentConnectionIds = this.context.connectionUserIds;
        let connection = -1;
        let bookmarked = false;

        if(post_type==='music'){
            icon = faMusic
        }
        else if(post_type==='event'){
            icon = faCalendarAlt
        }
        else if(post_type==='reflection'){
            icon = faLightbulb
        }
        else if(post_type==='podcast'){
            icon = faPodcast
        }
        else if(post_type==='book'){
            icon = faBookOpen
        }


        //determining if the user of post is a current connection
        connection = currentConnectionIds.findIndex(id=>id===user_id)
        bookmarked = isCurrentlyBookmarked(post_id, this.context.bookmarks);
        
        if(currentDisplay.dashboard.current_user==='followees'&& username!==currentUser){
            connectionButton = 
                    <DeleteConnection
                        userId={user_id}
                        currentUserId ={currentUserId}
                        push={this.props.history.push}
                    />  
        }
        else if(username!==currentUser && connection !== -1){
            connectionButton = 
                <DeleteConnection
                    userId={user_id}
                    currentUserId ={currentUserId}
                    push={this.props.history.push}
                /> 
        }
        else if(username!==currentUser && connection === -1){
            connectionButton = 
            <AddConnection
                    userId={user_id}
                    currentUserId ={currentUserId}
                />
        }
       
        if(this.props.postsToDisplay ==='bookmarks' ){
            bookmarkButton = 
                <DeleteBookmark
                    bookmarkId={bookmark_id}
                    postId={post_id}
                    currentUserId ={currentUserId}
                    push={this.props.history.push}
                    displayType = {this.props.postsToDisplay}
                />  
                connectionButton = ''                           
        }
        else if(this.props.postsToDisplay ==='posts' && bookmarked){
            bookmarkButton = 
                <DeleteBookmark
                    bookmarkId={bookmarked}
                    postId={post_id}
                    currentUserId ={currentUserId}
                    push={this.props.history.push}
                    displayType = {this.props.postsToDisplay}
                />  
                    

        }
        else{
            bookmarkButton = 
                <AddBookmark
                    postId={post_id}
                    allPostInfo={allPostInfo}
                    currentUserId ={currentUserId}
                    push={this.props.history.push}
                />
        }
        if(username===currentUser && currentDisplay.dashboard.current_user==='user'){
            button = <DeletePost
                        postId={post_id}/>
        }
        if(image_path){
            uploadedImage = <span className="post-span post-image">
                             <img src={image_path} 
                                alt={`an user uploaded image - ${post_type==='reflection' ? content : title}`}/>
                            </span>
        }
        if(this.props.postsToDisplay==='bookmarks'){
            form = <UpdateBookmark 
                        bookmark_content={bookmark_content}
                        bookmark_id={bookmark_id}/>
        }
            listItem = (<li className={`single-post ${post_type}-post ${bookmarked ? "bookmarked" : "not-bookmarked"}`} key={this.props.post_id}>
               <div className="post-info">
                   <div className="top-post-icons">
                        <span className="post-span post-icon"><FontAwesomeIcon icon={icon} /></span>
                        <div className="user-info">
                            <span className="post-span post-username">{username}</span>
                            {connectionButton}
                        </div>
                    </div>
                    {uploadedImage}
                    {title ? <span className="post-span post-title">{title}</span> :""}
                    {by ? <span className="post-span post-artist">{by}</span> :""}
                    {content ? <span className="post-span post-content">{content}</span> :""}
                    {link ? <span className="post-span post-link"><a href={link}>{ post_type==='event' ?`Link to learn more` : `Link to listen`}</a></span> : ""}
                </div>
                
                {bookmarkButton}
                {button}
                {form}
            </li>)
     
        return(
            listItem
        )
    }
}

export default SinglePost;