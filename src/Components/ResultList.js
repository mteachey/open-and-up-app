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
        
        filteredResults = FilterPosts(posts, currentDisplay)
        
        return(
            <section className="results-list">
                {/*<h2>{this.props.heading}</h2>*/}
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