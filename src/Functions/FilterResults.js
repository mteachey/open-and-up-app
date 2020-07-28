export const FilterPosts = (posts,currentDisplay) =>{
   // let currentUserInfo = users.find(user=>user.user_id===currentUserId);
    
    let filteredPosts = posts;
    //using buttons for filtering  by type of post (book, music, etc)
    if(currentDisplay.dashboard.current_post_type!=='all'){
        filteredPosts = filteredPosts.filter(post=>post.post_type===currentDisplay.dashboard.current_post_type)
    }

    //need to sort by date/time  
    return filteredPosts
}

//function to find the userid that corresponds to an entered username
export const FindUserId = (usernameInput, users)=>{
    let lowerCaseUserNameInput = usernameInput.toLowerCase();
    let user = users.find(user=>user.username===lowerCaseUserNameInput)
    if(user){
      return user.id}
    else{return}
}