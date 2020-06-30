import React, { Component } from 'react';
import SinglePost from './SinglePost.js';
import { FilterPosts } from '../Functions/FilterResults'
import OpenUpContext from '../OpenUpContext.js';


class ResultList extends Component{
    static contextType = OpenUpContext;
    render(){
      
        let posts=this.context.posts;
       // console.log(posts)
       
        let currentDisplay= this.context.currentDisplay;
        
        let filteredResults = FilterPosts(posts, currentDisplay);
      //  console.log(filteredResults);
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