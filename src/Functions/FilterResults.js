export const FilterPosts = (posts, currentUserId, users, currentDisplay) =>{
//this is just for dashboard not bookmark page yet
    let currentUserInfo = users.find(user=>user.user_id===currentUserId);
    let currentFollowees = currentUserInfo.followee_ids;
    console.log(`this is the current user id from filter function ${currentUserId}`);
    console.log(currentDisplay.dashboard.current_user)
    
    let filteredPosts = [];
   
    if(currentDisplay.dashboard.current_user==='user'){
        filteredPosts = posts.filter(post=>post.user_id===currentUserId); 
    }

    else if(currentDisplay.dashboard.current_user==='followees'){
        filteredPosts=[];
        let postGroup=[];
        for(let i=0;i<currentFollowees.length;i++){
            postGroup = posts.filter(post=>post.user_id===currentFollowees[i])
            filteredPosts = [...filteredPosts, ...postGroup]
        }
    }

    else if(currentDisplay.dashboard.current_user==='allUsers'){
        filteredPosts=posts;
    }

    else if(currentDisplay.dashboard.current_user==='byuser'){
        filteredPosts = posts.filter(post=>post.user_id===currentDisplay.dashboard.current_user); 
    }

    //using buttons for filtering  by type of post (book, music, etc)
    if(currentDisplay.dashboard.current_post_type!=='all'){
        console.log(`if statement ran`)
      //  console.log(currentDisplay.dashboard.current_post_type)
        filteredPosts = filteredPosts.filter(post=>post.type===currentDisplay.dashboard.current_post_type)
    }

     //need to sort by date   
    return filteredPosts
}