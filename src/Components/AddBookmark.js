import React from 'react';
import OpenUpContext from '../OpenUpContext.js';
import config from '../config.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBookmark} from '@fortawesome/free-solid-svg-icons';

function addBookmarkRequest(allPostInfo, currentUserId, callback){
    let newBookmark = {
        user_id:currentUserId,
        post_id:allPostInfo.post_id
    }
    let newBookmarkPost = allPostInfo
    let url = `${config.API_DEV_ENDPOINT}/bookmarks`;
    fetch(url,{
        method: 'POST',
        body:JSON.stringify(newBookmark),
        headers: {
        'content-type': 'application/json',
        // 'Authorization': `Bearer ${config.API_KEY}`
        },
    })
   .then(res=>{
        if(!res.ok){
        throw new Error('Something went wrong, please try again')
        }
        return res.json()
    })
    .then((bookmark) => {
      // call the callback when the request is successful
      // this is where the App component can remove it from state 
    //  console.log(bookmark);
      
      newBookmarkPost = {...newBookmarkPost, bookmark_id:bookmark.id}
     // console.log(newBookmarkPost)
      callback(newBookmarkPost);
       //go to bookmark
       console.log(`post call worked`)
    })
    .catch(error => {
        console.log(`there was an error`)
      //callback(postId, error)
    })
  console.log(`button clicked`)
}

export default function AddBookmark(props){
    return(
        <OpenUpContext.Consumer>
            {(context)=>(
                <button className="bookmark-button post-icon"
                    onClick={()=>{
                        addBookmarkRequest(props.allPostInfo,props.currentUserId,
                            context.addBookmark);
                            //props.push('/');
                    }}>
                   <FontAwesomeIcon icon={faBookmark} />

                </button>
            )}


        </OpenUpContext.Consumer>
    )
}