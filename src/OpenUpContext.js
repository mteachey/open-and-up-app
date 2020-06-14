import React from 'react';

const OpenUpContext = React.createContext({
      users:[{
        "user_id":"1",
        "username":"melinda",   
        "followee_ids":["2","3"],
        "bookmark_ids":[1,2,3],
        "date_created":"June 7th 2020",
    },{
      "user_id":"2",
      "username":"teachey",  
      "followee_ids":["1","3"],   
      "bookmark_ids":[5,4,6],
      "date_created":"June 8th 2020",    
      }
    ],
    bookmarks:[{
      "bookmark_id":1,
      "user_id":1,
      "post_id":1,
      "content":'I really loved this post.....'
    },
    {
      "bookmark_id":2,
      "user_id":1,
      "post_id":2,
      "content":'I really loved this post.....'
    },
    {
      "bookmark_id":3,
      "user_id":1,
      "post_id":10,
      "content":'I really loved this post.....'
    },],
      post:[ {
        "post_id":"1",
        "user_id":"1",
        "content":"I watched a complete stranger help another complete stranger pick up all of their groceries that had fallen out of their busted shopping bag",
        "type":"reflection",
        "date_created":"June 7th 2020"           
     },{
        "post_id":"2",
        "user_id":"1",
        "title":"Three Little Birds",
        "artist":"Bob Marley",
        "type":"music",
        "link":"https://youtu.be/zaGUr6wzyT8",
        "date_created":"June 8th 2020"            
     },{
        "post_id":"3",
        "user_id":"3",
        "title":"Super Soul Conversations: Dream Big with Joel Osteen",
        "description":"Pastor Joel Osteen discusses how to dream big and pray bold. Pastor Osteen explains why it’s important to focus on how far you’ve come and not on how much further you need to go to achieve your dream. He also shares why he believes gratitude plays a key role in dreaming big.",
        "type":"podcast",
        "link":"https://podcasts.apple.com/us/podcast/joel-osteen-dream-big/id1264843400?i=1000472985491",
        "date_created":"June 9th 2020"            
     }
    ],
    displayType:'followees',
    currentDisplay:{
      dashboard:{current_user:'default', current_post_type:'all'},
      bookmark_display:{current_user:'default', current_post_type:'all'}
    },
      addPost:()=>{},
      addUserAccount:()=>{},
      addFollower:()=>{},
      addBookmark:()=>{},
      deletePost:()=>{},
      deleteFollower:()=>{},
      deleteBookmark:()=>{},
      updateCurrentUser:()=>{},
      updateUserAccoutn:()=>{},
      addUser:()=>{},
      deleteUserAccount:()=>{},
})

export default OpenUpContext;