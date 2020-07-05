import React, { Component } from 'react';
import '../libraries/fontawesome.js';
import '../_styles/posts.css';
import DeletePost from'./DeletePost';
import AddBookmark from './AddBookmark'
import OpenUpContext from '../OpenUpContext.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faBookmark, faPodcast, faMusic, faLink, faBookOpen, faSun} from '@fortawesome/free-solid-svg-icons';

class SinglePost extends Component{
    static contextType=OpenUpContext;
    render(){

        const{post_id, post_type, title, by, link, content, start_date, username, user_id} = this.props;
        const currentUserId = this.context.currentUserInfo.user_id;
        let listItem ='';
        let button ='';
        let currentUser = this.context.currentUserInfo.username
        let bookmarkButton = <AddBookmark
                                postId={post_id}
                                currentUserId ={currentUserId}
                              />
        if(username===currentUser){
            button = <DeletePost
                        postId={post_id}/>
        }
        if(post_type==='music'){
            listItem = (<li className="single-post music-post" key={this.props.post_id}>
               <div className="post-info">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faMusic} /></span>
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faSun} /></span>
                    <span className="post-span post-username">{post_id}</span>
                    <span className="post-span post-username">{username}</span>
                    <span className="post-span post-title">{title}</span>
                    <span className="post-span post-artist">{by}</span>
                    <span className="post-span post-link"><a href={link}>Link to listen</a></span>
                </div>
                <div className="post-icons-buttons">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faLink} /></span>
                    {bookmarkButton}
                </div>
                {button}
            </li>)
        }
        else if(post_type==='reflection'){
            listItem = (<li className="single-post reflection-post" key={this.props.post_id}>
                <div className="post-info">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faLightbulb} /></span>
                    <span className="post-span post-username">{username}</span>
                    <span className="post-span post-content">{content}</span>
                </div>
                <div className="post-icons-buttons">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faLink} /></span>
                    {bookmarkButton}
                </div>
                {button}
            </li>)
        }
        else if(post_type==='podcast'){
            listItem = (<li className="single-post podcast-post" key={this.props.post_id}>
                <div className="post-info">
                 <span className="post-span post-icon"><FontAwesomeIcon icon={faPodcast} /></span>
                    <span className="post-span post-username">{username}</span>
                    <span className="post-span post-title">{title}</span>
                    <span className="post-span post-description">{content}</span>
                    <span className="post-span post-link"><a href={link}>Link to listen</a></span>
                </div>
                <div className="post-icons-buttons">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faLink} /></span>
                    {bookmarkButton}
                </div>
                {button}
            </li>)
        }
        else if(post_type==='event'){
            listItem = (<li className="single-post event-post" key={this.props.post_id}>
                <div className="post-info">
                     <span className="post-span post-icon"><FontAwesomeIcon icon={faCalendarAlt} /></span>
                     <span className="post-span post-username">{username}</span>
                    <span className="post-span post-title">{title}</span>
                    <span className="post-span post-description">{content}</span>
                    <span className="post-span post-start-date">{start_date}</span>
                    <span className="post-span post-link"><a href={link}>Link to learn more</a></span>
                </div>
                <div className="post-icons-buttons">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faLink} /></span>
                    {bookmarkButton}
                </div>
                {button}
            </li>)
        }
        else if(post_type==='book'){
            listItem = (<li className="single-post book-post" key={this.props.post_id}>
                <div className="post-info">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faBookOpen} /></span>
                    <span className="post-span post-username">{username}</span>
                    <span className="post-span post-title">{title}</span>
                    <span className="post-span post-author">{by}</span>
                    <span className="post-span post-description">{content}</span>
                </div>
                <div className="post-icons-buttons">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faLink} /></span>
                    {bookmarkButton}
                </div>
                {button}
                
            </li>)
        }

        return(
            listItem
        )
    }
}

export default SinglePost;