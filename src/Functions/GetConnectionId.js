export const GetConnectionId = (userId, connections) =>{
   let connectionId = connections.find(connection=>connection.followee_id===userId).id;
    return connectionId
}

//function to determine of current post is bookmarked by current user
export const isCurrentlyBookmarked=(post_id, bookmarks)=>{
    let bookmarkedPostIds = bookmarks.map(bookmark=>bookmark.post_id);
    let bookmarked = bookmarkedPostIds.findIndex(id => post_id===id);
    if(bookmarked!==-1){
        let bookmarkId = findBookmarkId(post_id, bookmarks)
        return bookmarkId
    }
    else {return false}
}

const findBookmarkId=(post_id,bookmarks)=>{
    let bookmarkId = bookmarks.find(bookmark=>bookmark.post_id===post_id).bookmark_id;
    return bookmarkId
}
    
