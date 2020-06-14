import React, { Component } from 'react';
import SinglePost from './SinglePost.js';
import { FilterPosts } from '../Functions/FilterResults'
import OpenUpContext from '../OpenUpContext.js';


class ResultList extends Component{
    static contextType = OpenUpContext;
    render(){
      
        let posts=this.context.posts;
        console.log(posts);
        let users=this.context.users;
        let currentDisplay= this.context.currentDisplay;
        let currentUserId = this.context.currentUserInfo.user_id;

        //need to make dyanmic
        let displayType = this.context.displayType;
        //need to make dyanmic based on user       

        let filteredResults = FilterPosts(posts, currentUserId, users, displayType, currentDisplay);
        console.log(filteredResults);
        return(
            <section className="results-list">
                <ul className="result-list">
                    {filteredResults.map((post, i)=>
                    <SinglePost
                      key={i}
                      {...post}
                    />)}
                </ul>
            </section>
        )
    }
}

export default ResultList;