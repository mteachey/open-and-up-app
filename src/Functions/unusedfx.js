if(currentDisplay.dashboard.current_user==='user'){
    filteredPosts = posts.filter(post=>post.user_id===currentUserId); 
}

else if(currentDisplay.dashboard.current_user==='followees'){
    filteredPosts=[];
    let postGroup=[];
    for(let i=0;i<connectionIds.length;i++){
        postGroup = posts.filter(post=>post.user_id===connectionIds[i])
        filteredPosts = [...filteredPosts, ...postGroup]
    }
}

else if(currentDisplay.dashboard.current_user==='allUsers'){
    filteredPosts=posts;
}

else if(currentDisplay.dashboard.current_user==='byuser'){
    filteredPosts = posts.filter(post=>post.user_id===currentDisplay.dashboard.current_user); 
}