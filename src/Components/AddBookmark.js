import React from 'react';
import OpenUpContext from '../OpenUpContext.js';
import config from '../config.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBookmark} from '@fortawesome/free-solid-svg-icons';

function addBookmarkRequest(postId, currentUserId, callback){
    let error = null;
    let newBookmark = {
        user_id:1,
        post_type:fieldType,
        title:inputs.title.value,
        link:inputs.link.value,
        content:inputs.content.value,
        by:byValue}
    let url = `${config.API_DEV_ENDPOINT}/bookmarks/${postId}`;
    console.log(url)
  /*  fetch(url,{
        method: '',
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
    .then(() => {
      // call the callback when the request is successful
      // this is where the App component can remove it from state   
       callback(postId)
       console.log(`call worked`)
    })
    .catch(error => {
       callback(postId, error)
    })*/
  console.log(`button clicked`)
}

export default function AddBookmark(props){
    return(
        <OpenUpContext.Consumer>
            {(context)=>(
                <button className="bookmark-button post-icon"
                    onClick={()=>{
                        addBookmarkRequest(props.postId,props.currentUserId,
                            context.addBookmark);
                    }}>
                   <FontAwesomeIcon icon={faBookmark} />

                </button>
            )}


        </OpenUpContext.Consumer>
    )
}