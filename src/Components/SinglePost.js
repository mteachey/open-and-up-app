import React, { Component } from 'react';
import '../libraries/fontawesome.js';
import '../_styles/posts.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCalendarAlt, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faBookmark, faPodcast, faMusic, faLink, faBookOpen } from '@fortawesome/free-solid-svg-icons';

class SinglePost extends Component{
    render(){

        const{post_id, user_id, username, type, date_created,title, artist,description, author, link, content} = this.props;
        let listItem ='';
        if(type==='music'){
            listItem = (<li className="single-post" key={this.props.post_id}>
               <div className="post-content">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faMusic} /></span>
                    <span className="post-span post-username">{username}</span>
                    <span className="post-span post-title">{title}</span>
                    <span className="post-span post-artist">{artist}</span>
                    <span className="post-span post-link"><a href={link}>Link to listen</a></span>
                </div>
                <div className="post-icons-buttons">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faLink} /></span>
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faBookmark} /></span>
                </div>
            </li>)
        }
        else if(type==='reflection'){
            listItem = (<li className="single-post" key={this.props.post_id}>
                <div className="post-content">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faLightbulb} /></span>
                    <span className="post-span post-username">{username}</span>
                    <span className="post-span post-content">{content}</span>
                </div>
                <div className="post-icons-buttons">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faLink} /></span>
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faBookmark} /></span>
                </div>
            </li>)
        }
        else if(type==='podcast'){
            listItem = (<li className="single-post" key={this.props.post_id}>
                <div className="post-content">
                 <span className="post-span post-icon"><FontAwesomeIcon icon={faPodcast} /></span>
                    <span className="post-span post-username">{username}</span>
                    <span className="post-span post-title">{title}</span>
                    <span className="post-span post-description">{description}</span>
                    <span className="post-span post-link"><a href={link}>Link to listen</a></span>
                </div>
                <div className="post-icons-buttons">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faLink} /></span>
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faBookmark} /></span>
                </div>
            </li>)
        }
        else if(type==='event'){
            listItem = (<li className="single-post" key={this.props.post_id}>
                <div className="post-content">
                     <span className="post-span post-icon"><FontAwesomeIcon icon={faCalendarAlt} /></span>
                    <span className="post-span post-username">{username}</span>
                    <span className="post-span post-title">{title}</span>
                    <span className="post-span post-description">{description}</span>
                    <span className="post-span post-link"><a href={link}>Link to learn more</a></span>
                </div>
                <div className="post-icons-buttons">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faLink} /></span>
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faBookmark} /></span>
                </div>
            </li>)
        }
        else if(type==='book'){
            listItem = (<li className="single-post" key={this.props.post_id}>
                <div className="post-content">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faBookOpen} /></span>
                    <span className="post-span post-username">{username}</span>
                    <span className="post-span post-title">{title}</span>
                    <span className="post-span post-author">{author}</span>
                    <span className="post-span post-description">{description}</span>
                </div>
                <div className="post-icons-buttons">
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faLink} /></span>
                    <span className="post-span post-icon"><FontAwesomeIcon icon={faBookmark} /></span>
                </div>
            </li>)
        }

        return(
            listItem
        )
    }
}

export default SinglePost;