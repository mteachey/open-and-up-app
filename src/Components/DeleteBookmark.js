import React from 'react';
import OpenUpContext from '../OpenUpContext.js';
import config from '../config.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

function deleteBookmarkRequest(bookmarkId, callback){
    let url = `${config.API_DEV_ENDPOINT}/bookmarks/${bookmarkId}`;
    console.log(url)
    fetch(url,{
        method: 'DELETE',
        headers: {
        'content-type': 'application/json',
        // 'Authorization': `Bearer ${config.API_KEY}`
        },
    })
   .then(res=>{
        if(!res.ok){
        throw new Error('Something went wrong, please try again')
        }
        console.log(`this then runs`)
        return 
    })
    .then(() => {
      // call the callback when the request is successful
      // this is where the App component can remove it from state
       callback(bookmarkId)
       
    })
    .catch(error => {
        console.log(`there was an error`)
        console.log(error)
    })
  console.log(`button clicked`)
}

export default function DeleteBookmark(props){
    return(
        <OpenUpContext.Consumer>
            {(context)=>(
                <button className="bookmark-button post-icon delete-icon"
                    onClick={()=>{
                        deleteBookmarkRequest(props.bookmarkId,
                            context.deleteBookmark);
                    }}>
                   <FontAwesomeIcon icon={faTrashAlt} />

                </button>
            )}


        </OpenUpContext.Consumer>
    )
}