import React, { Component } from 'react';

class SearchRow extends Component{
    render(){
        return(
            <section className="search-row">
                <form className="fsearch-form">  
                    <div>    
                        <label htmlFor="search_tags">Search by tags</label>
                        <input id="search_tags" name="search_tags" type="text"
                        />
                    </div>  
                    <div>
                         <label htmlFor="search_username">Search by username</label>
                        <input id="search_username" name="search_username" type="text"
                        />
                    </div>
                        <button className="button" type="submit">Search</button>
                        <button className="button" >All Posts</button>
                    </form>
            </section>
        )

    }
}

export default SearchRow;