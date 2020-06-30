import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Home.js';
import Dashboard from './Components/Dashboard.js';
import LearnMore from './Components/LearnMore.js';
import UserSignUp from './Components/UserSignUp.js';
import NewPost from './Components/NewPost.js';
import BookmarkPage from './Components/BookmarkPage.js';
import MyAccount from './Components/MyAccount.js';
import OpenUpContext from './OpenUpContext.js';
import './_styles/App.css';
import data from './data.js';
import config from './config.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      currentUserInfo:{ "user_id":1,
                        "username":"mteachey",  
                        "fullname":"Melinda Teachey"},
      posts:data.posts,
      bookmarks:data.bookmarks,
      users:data.users,
      //of current user
      connectionIds:[],
      currentDisplay:{
        dashboard:{current_user:'followees', current_post_type:'all'},
        bookmark_display:{current_user:'followees', current_post_type:'all'}
      }
    }//end of state

  }

  //filter buttons function to update type of post displayed
  updatePostType=(displayChange)=>{
    const {currentDisplay,currentUserInfo} = this.state;
    let currentUserId = currentUserInfo.user_id;
     //change the posts displayed depending on type of user selected
      if(displayChange ==='allUsers' || displayChange ==='byUser' || displayChange === 'followees' || displayChange ==='user'){
        currentDisplay.dashboard.current_user=displayChange;
        this.getPostsByUser(displayChange,currentUserId)
      }
      //changes the display for type of post
      if(displayChange ==='all' || displayChange ==='book' || displayChange === 'music' || displayChange ===
      'podcast' || displayChange === 'event' || displayChange === 'reflection'){
        currentDisplay.dashboard.current_post_type=displayChange;}

    this.setState({
      currentDisplay:currentDisplay})
    
  }

  addPost=(newPost)=>{
    this.setState({
      posts:[...this.state.posts, newPost]
    })
  }

  getConnectionsIds=(connections)=>{
    let connectionIds = connections.map(connection=>connection.followee_id);
    return connectionIds;
  }

  updatePostsDisplayed=(posts)=>{
    this.setState({
      posts:posts
    })
  }

  getPostsByUser=(userToDisplay,currentUserId)=>{
    console.log(`this is the userToDisplay from Getposts ${userToDisplay} ${currentUserId}`)
    let url = `${config.API_DEV_ENDPOINT}/posts`
   
    currentUserId = this.state.currentUserInfo.user_id
    
    if(userToDisplay==='followees'){
        //default
        url=`${config.API_DEV_ENDPOINT}/posts?userconnection=${currentUserId}`;
        console.log(url)
    }
    else if(userToDisplay==='all'){
      url = `${config.API_DEV_ENDPOINT}/posts`
      console.log(url)
    }
    else if(userToDisplay==='user'){
        url = `${config.API_DEV_ENDPOINT}/posts?userid=${currentUserId}`
        console.log(url)
      }
    else {
      url = `${config.API_DEV_ENDPOINT}/posts?userid=${userToDisplay}`
      console.log(url)
    }

    fetch(url,{
        method:'GET',
        header:{
        'content-type':'application/json',
        // 'Authorization':`Bearer ${config.API_KEY}`
        },
    })
    .then(res=>{
        if(!res.ok){
        throw new Error('Something went wrong, please try again')
        }
        return res.json()
    })
    .then(postdata=>{
      console.log(postdata);
       this.updatePostType('all');
       this.updatePostsDisplayed(postdata)
    })
    .catch(err=>{
      this.setState({
        error:err.message
      });
    })
}

getUsers=()=>{
  fetch(`${config.API_DEV_ENDPOINT}/users`,{
    method:'GET',
    header:{
      'content-type':'application/json',
     // 'Authorization':`Bearer ${config.API_KEY}`
    },
  })
  .then(res=>{
    if(!res.ok){
      throw new Error('Something went wrong, please try again')
    }
    return res.json()
  })
  .then(userdata=>{
   console.log(userdata)
    this.setState({
      users:userdata
    })
  })
  .catch(err=>{
    this.setState({
      error:err.message
    })
  })
}

getConnections=()=>{
  fetch(`${config.API_DEV_ENDPOINT}/connections?userid=${this.state.currentUserInfo.user_id}`,{
    method:'GET',
    header:{
      'content-type':'application/json',
     // 'Authorization':`Bearer ${config.API_KEY}`
    },
  })
  .then(res=>{
    if(!res.ok){
      throw new Error('Something went wrong, please try again')
    }
    return res.json()
  })
  .then(connectiondata=>{
    let currentUserConnectionIds = this.getConnectionsIds(connectiondata);
    this.setState({
      connectionIds:currentUserConnectionIds
    })
  
  })
  .catch(err=>{
    this.setState({
      error:err.message
    });
  })

}

  componentDidMount(){
    this.setState({error:null})
    //getting users
    this.getUsers();
    //get connections
    this.getConnections();
    //get posts on start of the current user's followees
    this.getPostsByUser('followees',this.state.currentUserInfo.user_id);  
  }//end of cDM
  


  render () {
    const contextValue={
      currentUserInfo:this.state.currentUserInfo,
      posts:this.state.posts,
      bookmarks:this.state.bookmarks,
      connectionIds:this.state.connectionIds,
      users:this.state.users,
      currentDisplay:this.state.currentDisplay,
      updatePostType:this.updatePostType,
      updatePostsDisplayed:this.updatePostsDisplayed,
      addPost:this.addPost,
      getPostsByUser:this.getPostsByUser
    }
    return (
      <div className="App">
        <OpenUpContext.Provider value={contextValue}>
          <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            exact
            path="/dashboard"
            component={Dashboard}
          />
          <Route
            exact
            path="/bookmarks"
            component={BookmarkPage}
          />
          <Route
            exact
            path="/user-signup"
            component={UserSignUp}
          />
          <Route
            exact
            path="/new-post"
            component={NewPost}
          />
          <Route
            exact
            path="/my-account"
            component={MyAccount}
          />
          <Route
            exact
            path="/learn-more"
            component={LearnMore}
          />
        </OpenUpContext.Provider>
      </div>
    );
  }
}

export default App;
