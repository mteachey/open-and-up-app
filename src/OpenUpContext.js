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
      "post_id":1,
      "user_id":1,
      "username":"melinda",
      "title":"",
      "link":"",
      "event_dates":"",
      "by":"",
      "content":"My inner growth propelled me to by my own 'I'-to be an authentic woman who was contained in herself, who chose and determined and handled her life from her own genuine spiritual center  -Sue Monk Kidd",
      "type":"reflection",
      "date_created":"June 7th 2020" ,
      "bookmark_content":"",
      "bookmark_id":1         
   },],
      post:[ {
        "post_id":1,
        "user_id":1,
        "username":"melinda",
        "title":"",
        "link":"",
        "event_dates":"",
        "by":"",
        "content":"My inner growth propelled me to by my own 'I'-to be an authentic woman who was contained in herself, who chose and determined and handled her life from her own genuine spiritual center  -Sue Monk Kidd",
        "type":"reflection",
        "date_created":"June 7th 2020",
        "image_path":''         
     },
     {
      "post_id":6,
      "user_id":2,
      "username":"teachey",
      "title":"Untamed",
      "link":"",
      "event_dates":"",
      "by":"Glennon Doyle",
      "content":"Soulful and uproarious, forceful and tender, Untamed is both an intimate memoir and a galvanizing wake-up call. It is the story of how one woman learned that a responsible mother is not one who slowly dies for her children, but one who shows them how to fully live.",
      "type":"book",
      "date_created":"June 9th 2020",
      "image_path":''          
   }],
   connectionUserIds:[],
   connections:[{
     "id":1,
     "user_id":1,
     "followee_id":2
   }],
   currentDisplay:{
      dashboard:{current_user:'default', current_post_type:'all'},
      bookmark_display:{current_user:'default', current_post_type:'all'}
    },
    currentUserInfo:{
      "user_id":"1",
      "username":"melinda",   
      "followee_ids":["2","3"],
      "bookmark_ids":[1,2,3],
      "date_created":"June 7th 2020",
  },
      addPost:()=>{},
      addUserAccount:()=>{},
      updateConnections:()=>{},
      addBookmark:()=>{},
      deletePost:()=>{},
      deleteFollower:()=>{},
      deleteBookmark:()=>{},
      updateCurrentUser:()=>{},
      updateUserAccount:()=>{},
      addUser:()=>{},
      deleteUserAccount:()=>{},
      updatePostType:()=>{},
      updatePostsDisplayed:()=>{},
      getPostsByUser:()=>{},
      updateUsernameToDisplay:()=>{},
      updateBookmark:()=>{},
      showLoadAnimation:()=>{}
})

export default OpenUpContext;