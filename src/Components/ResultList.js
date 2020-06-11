import React, { Component } from 'react';
import data from '../data.js';
import SinglePost from './SinglePost.js';


class ResultList extends Component{
    render(){

        let results = data.posts;
        console.log(results);
        return(
            <section className="results-list">
                <ul className="result-list">
                    {results.map((post, i)=>
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