import React, { Component } from 'react';
import OpenUpContext from '../OpenUpContext.js';
import { FindUserId } from '../Functions/FilterResults'

class SearchRow extends Component{
    static contextType = OpenUpContext;
    constructor(props){
        super(props);
        this.state={
            error:null,
            username:{value:"", touched:false},
        }
    }//end of constructor

    updateChange=(inputUserName, fieldtouched)=>{
        this.setState({username:{value:inputUserName, touched:fieldtouched}})
    }

    handleReset=(e)=>{
        e.preventDefault();

        //reset the posts being displayed to connnections
        this.context.getPostsByUser('followees');
        this.context.updateUsernameToDisplay('your connections'); 

        //cler error message and input value
        this.setState({error:null, username:{value:"",touched:false}});
    }

    handleSearchSubmit=(e)=>{
        e.preventDefault();
        
        const username = this.state.username.value;
        let {search_username} = e.target;
        let userid = FindUserId(username, this.context.users);
        
        if(userid){
           // this.getPosts(userid)
           this.context.getPostsByUser(userid)
           this.context.updateUsernameToDisplay(username);
            search_username.value="";
        }
        else if(!userid){
            this.setState({error:"No user with that name exist - please check your spelling"})
        }
        
    }//end of handleSubmit
  
    render(){

        return(
            <section className="search-row">
                <form className="search-form"
                      onSubmit={e=>this.handleSearchSubmit(e)}>  
                    <div className="search-input">
                         <input id="search_username" 
                                name="search_username" 
                                type="text"
                                value={this.state.username.value}
                                onChange={e => this.updateChange(e.target.value, true)}
                         />
                         <label htmlFor="search_username">Search by username</label>
                    </div>
                    <div className="button-row">
                        <button className="button" type="submit">Search</button>
                        <button className="button button-reset" 
                        type="reset"
                        onClick={e=>this.handleReset(e)}>Reset</button>
                    </div>
                </form>
                <div className="error-message">{this.state.error}</div>
            </section>
        )

    }
}

export default SearchRow;