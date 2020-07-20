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
import { faPodcast, faMusic, faBookOpen, faSun} from '@fortawesome/free-solid-svg-icons';

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

        const{post_id, post_type, title, by, link, content, start_date, username, user_id, bookmark_content, bookmark_id, image_path} = this.props;
        const allPostInfo = this.props.postInfo;
        const currentUserId = this.context.currentUserInfo.user_id;
        let listItem ='';
        let button ='';
        let form ='';
        let uploadedImage ='';
        let bookmarkButton ='';
        let connectionButton ='';
        let currentUser = this.context.currentUserInfo.username;
        let currentDisplay= this.context.currentDisplay;
        let currentConnectionIds = this.context.connectionUserIds;
        let connection = -1;
        let bookmarked = false;

        //determining if the user of post is a current connection
        connection = currentConnectionIds.findIndex(id=>id===user_id)
        bookmarked = isCurrentlyBookmarked(post_id, this.context.bookmarks);
        
        if(currentDisplay.dashboard.current_user==='followees'){
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
                connectionButton = ''     

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
        if(username===currentUser){
            button = <DeletePost
                        postId={post_id}/>
        }
        if(image_path){
            uploadedImage = <span className="post-span post-image"><img src={image_path} alt={content}/></span>
        }
        if(this.props.postsToDisplay==='bookmarks'){
            form = <UpdateBookmark 
                        bookmark_content={bookmark_content}
                        bookmark_id={bookmark_id}/>
        }
        if(post_type==='music'){
            listItem = (<li className={`single-post music-post ${bookmarked ? "bookmarked" : "not-bookmarked"}`} key={this.props.post_id}>
               <div className="post-info">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faMusic} /></span>
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faSun} /></span>
                    <div className="user-info">
                        <span className="post-span post-username">{username}</span>
                        {connectionButton}
                    </div>
                    <span className="post-span post-title">{title}</span>
                    <span className="post-span post-artist">{by}</span>
                    <span className="post-span post-link"><a href={link}>Link to listen</a></span>
                    {uploadedImage}
                </div>
                <div className="post-icons-buttons">
                    {bookmarkButton}
                </div>
                {button}
                {form}
            </li>)
        }
        else if(post_type==='reflection'){
            listItem = (<li className={`single-post reflection-post ${bookmarked ? "bookmarked" : "not-bookmarked"}`} key={this.props.post_id}>
                <div className="post-info">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faLightbulb} /></span>
                    <div className="user-info">
                        <span className="post-span post-username">{username}</span>
                        {connectionButton}
                    </div>
                    <span className="post-span post-content">{content}</span>
                    {uploadedImage}
                </div>
                <div className="post-icons-buttons">
                    {bookmarkButton}
                </div>
                {button}
                {form}
            </li>)
        }
        else if(post_type==='podcast'){
            listItem = (<li className={`single-post podcast-post ${bookmarked ? "bookmarked" : "not-bookmarked"}`} key={this.props.post_id}>
                <div className="post-info">
                 <span className="post-span post-icon"><FontAwesomeIcon icon={faPodcast} /></span>
                    <div className="user-info">
                        <span className="post-span post-username">{username}</span>
                        {connectionButton}
                    </div>
                    <span className="post-span post-title">{title}</span>
                    <span className="post-span post-description">{content}</span>
                    <span className="post-span post-link"><a href={link}>Link to listen</a></span>
                    {uploadedImage}
                </div>
                <div className="post-icons-buttons">
                    {bookmarkButton}
                </div>
                {button}
                {form}
            </li>)
        }
        else if(post_type==='event'){
            listItem = (<li className={`single-post event-post ${bookmarked ? "bookmarked" : "not-bookmarked"}`} key={this.props.post_id} >
                <div className="post-info">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faCalendarAlt} /></span>
                    <div className="user-info">
                        <span className="post-span post-username">{username}</span>
                        {connectionButton}
                    </div>
                    <span className="post-span post-title">{title}</span>
                    <span className="post-span post-description">{content}</span>
                    <span className="post-span post-start-date">{start_date}</span>
                    <span className="post-span post-link"><a href={link}>Link to learn more</a></span>
                    {uploadedImage}
                </div>
                <div className="post-icons-buttons">
                    {bookmarkButton}
                </div>
                {button}
                {form}
            </li>)
        }
        else if(post_type==='book'){
            listItem = (<li className={`single-post book-post ${bookmarked ? "bookmarked" : "not-bookmarked"}`} key={this.props.post_id} >
                <div className="post-info">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faBookOpen} /></span>
                    <div className="user-info">
                        <span className="post-span post-username">{username}</span>
                        {connectionButton}
                    </div>
                    <span className="post-span post-title">{title}</span>
                    <span className="post-span post-author">{by}</span>
                    <span className="post-span post-description">{content}</span>
                    {uploadedImage}
                </div>
                <div className="post-icons-buttons">
                    {bookmarkButton}
                </div>
                {button}
                {form}
                
            </li>)
        }

        return(
            listItem
        )
    }
}

export default SinglePost;