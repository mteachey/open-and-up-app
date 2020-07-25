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
      //posts of logged in user's bookmarks with the bookmark_content and bookmark_id
      bookmarks:data.bookmarks,
      connections:data.connections,
      users:data.users,
      //of current user
      connectionUserIds:[],
      currentDisplay:{
        user_posts_displayed:'of your connections',
        type_posts_displayed:'all',
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

        currentDisplay.dashboard.current_post_type=displayChange;
      }

    this.setState({
      currentDisplay:currentDisplay})
    
  }

  updateBookmark=(bookmarkId, updatedContent)=>{
    const { bookmarks } = this.state;
    bookmarks.map(bookmark=>{
      if(bookmark.bookmark_id===bookmarkId) 
      { bookmark.bookmark_content=updatedContent
         return bookmark}
        else {return bookmark}}
    )
  }

  updateUsernameToDisplay=(name)=>{
    const {currentDisplay} = this.state;
    
    if(name==='allUsers'){
      currentDisplay.user_posts_displayed=" of all users"
    }
    else if(name==='followees'){
      currentDisplay.user_posts_displayed="of your connections"
    }
    else if(name==='user'){
      currentDisplay.user_posts_displayed="that you created"
    }
    this.setState({
      currentDisplay:currentDisplay})

  }

  addPost=(newPost)=>{
    this.setState({
      posts:[...this.state.posts, newPost]
    })
  }

  getBookmarkPostIds=(bookmarks)=>{
    let currentUserBookmarkedPostIds = bookmarks.map(bookmark=>bookmark.post_id);
    return currentUserBookmarkedPostIds;
  }

  getConnectionsIds=(connections)=>{
    let currentUserConnectionIds = connections.map(connection=>connection.followee_id);
    return currentUserConnectionIds;
  }

  updatePostsDisplayed=(posts)=>{
    this.setState({
      posts:posts
    })
  }

  deletePost=(postId)=>{
    const newPosts = this.state.posts.filter(post=>
      post.post_id !== postId)
    this.setState({
      posts:newPosts
    })
  }

  deleteBookmark=(bookmarkId)=>{
    const newBookmarkPosts = this.state.bookmarks.filter(bookmark=>
      bookmark.bookmark_id !== bookmarkId)
    this.setState({
      bookmarks:newBookmarkPosts
    })
  }

  addBookmark=(newBookmarkPost)=>{
    this.setState({
      bookmarks:[...this.state.bookmarks, newBookmarkPost]
    })
  }

  updateConnections=()=>{
    //need to call api again after added connection in order to get all the posts for that user from the db
    let currentUserId = this.state.currentUserInfo.user_id
    this.getConnections();
    this.getPostsByUser('followees',currentUserId);
  }

  getPostsByUser=(userToDisplay,currentUserId)=>{
    //let url = `${config.API_DEV_ENDPOINT}/posts`
    let url = `${config.API_ENDPOINT}/posts`
   
    currentUserId = this.state.currentUserInfo.user_id
    
    if(userToDisplay==='followees'){
        //default
       // url=`${config.API_DEV_ENDPOINT}/posts?userconnection=${currentUserId}`;
        url=`${config.API_ENDPOINT}/posts?userconnection=${currentUserId}`;
        
    }
    else if(userToDisplay==='allUsers'){
      //url = `${config.API_DEV_ENDPOINT}/posts`
      url = `${config.API_ENDPOINT}/posts`
      
    }
    else if(userToDisplay==='user'){
        //url = `${config.API_DEV_ENDPOINT}/posts?userid=${currentUserId}`
        url = `${config.API_ENDPOINT}/posts?userid=${currentUserId}`
      }
    else {
      //url = `${config.API_DEV_ENDPOINT}/posts?userid=${userToDisplay}`
      url = `${config.API_ENDPOINT}/posts?userid=${userToDisplay}`
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
  //let url = `${config.API_ENDPOINT}/users`;
  let url = `${config.API_ENDPOINT}/users`;

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
  .then(userdata=>{
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

getBookmarks=(userid)=>{
 // let url = `${config.API_DEV_ENDPOINT}/posts?userbookmark=${userid}`;
  let url = `${config.API_ENDPOINT}/posts?userbookmark=${userid}`;

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
  .then(bookmarkposts=>{
    this.setState({
      bookmarks:bookmarkposts
    })
  
  })
  .catch(err=>{
    this.setState({
      error:err.message
    });
  })
}

getConnections=()=>{
  //let url = `${config.API_DEV_ENDPOINT}/connections?userid=${this.state.currentUserInfo.user_id}`;
  let url = `${config.API_ENDPOINT}/connections?userid=${this.state.currentUserInfo.user_id}`;

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
  .then(connectiondata=>{
    let currentUserConnectionIds = this.getConnectionsIds(connectiondata);
    this.setState({
      connectionUserIds:currentUserConnectionIds,
      connections:connectiondata
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
    //get connection Ids
    this.getConnections();
    //get posts on start of the current user's followees
    this.getPostsByUser('followees',this.state.currentUserInfo.user_id);  
    //get bookmarked posts of current user
    this.getBookmarks(this.state.currentUserInfo.user_id);
  }//end of cDM


  render () {
    const contextValue={
      currentUserInfo:this.state.currentUserInfo,
      posts:this.state.posts,
      bookmarks:this.state.bookmarks,
      connections:this.state.connections,
      connectionUserIds:this.state.connectionUserIds,
      users:this.state.users,
      currentDisplay:this.state.currentDisplay,
      updatePostType:this.updatePostType,
      updatePostsDisplayed:this.updatePostsDisplayed,
      addPost:this.addPost,
      getPostsByUser:this.getPostsByUser,
      updateUsernameToDisplay:this.updateUsernameToDisplay,
      deletePost:this.deletePost,
      addBookmark:this.addBookmark,
      updateBookmark:this.updateBookmark,
      deleteBookmark:this.deleteBookmark,
      updateConnections:this.updateConnections,
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
