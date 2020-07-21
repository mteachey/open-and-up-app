import React, { Component } from 'react';
import SinglePost from './SinglePost.js';
import { FilterPosts } from '../Functions/FilterResults'
import OpenUpContext from '../OpenUpContext.js';


class ResultList extends Component{
    static contextType = OpenUpContext;
    render(){
      
        //component passes in either the default posts to display on the page
        let posts=this.props.posts;
       
        let filteredResults = posts;

        let currentDisplay= this.context.currentDisplay;
        let typeOfPost = '';

        if(this.props.postsToDisplay==='posts'){
            typeOfPost = this.context.currentDisplay.dashboard.current_post_type
        }
        else if(this.props.postsToDisplay==='bookmarks'){
            typeOfPost = this.context.currentDisplay.bookmark_display.current_post_type;
        }
         console.log(this.context.currentDisplay.user_posts_displayed)
        filteredResults = FilterPosts(posts, currentDisplay)
        
        return(
            <section className="results-list">
                <p>You are viewing {typeOfPost} posts of {this.context.currentDisplay.user_posts_displayed} </p>
                <ul className="result-list">
                    {filteredResults.map((post, i)=>
                    <SinglePost
                      key={i}
                      {...post}
                      postInfo = {post}
                      postsToDisplay={this.props.postsToDisplay}
                    />)}
                </ul>
            </section>
        )
    }
}

export default ResultList;