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

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      currentUserInfo:data.users[0],
      posts:data.posts,
      bookmarks:data.bookmarks,
      users:data.users,
      currentDisplay:{
        dashboard:{current_user:'followees', current_post_type:'all'},
        bookmark_display:{current_user:'followees', current_post_type:'all'}
      }
    }//end of state

  }

  //filter buttons function to update type of post displayed
  updatePostType=(displayChange)=>{
    console.log(`this is the usertype being sent to app ${displayChange}`)
    console.log(`this UPT from app ran`)
    const {currentDisplay} = this.state;
    
    //change the display for type of user to display
    if(displayChange ==='allUsers' || displayChange ==='byUser' || displayChange === 'followees' || displayChange ==='user'){
    currentDisplay.dashboard.current_user=displayChange;}

    //changes the display for type of post
    if(displayChange ==='all' || displayChange ==='book' || displayChange === 'music' || displayChange ===
    'podcast' || displayChange === 'event' || displayChange === 'reflection'){
      currentDisplay.dashboard.current_post_type=displayChange;}

    this.setState({
      currentDisplay:currentDisplay})
    
  }

  addPost=(newPost)=>{
    console.log(`new post from addPost`);
    console.log(newPost)
    console.log(this.state.posts)
    this.setState({
      posts:[...this.state.posts, newPost]
    })
  }

  render () {
    const contextValue={
      currentUserInfo:this.state.currentUserInfo,
      posts:this.state.posts,
      bookmarks:this.state.bookmarks,
      users:this.state.users,
      currentDisplay:this.state.currentDisplay,
      updatePostType:this.updatePostType,
      addPost:this.addPost
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
