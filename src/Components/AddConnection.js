import React from 'react';
import OpenUpContext from '../OpenUpContext.js';
import config from '../config.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLink} from '@fortawesome/free-solid-svg-icons';

function addConnectionRequest(userId, currentUserId, callback){
    let newConnection = {
        user_id:currentUserId,
        followee_id:userId
       }
    let url = `${config.API_DEV_ENDPOINT}/connections`;
    console.log(url)
   fetch(url,{
        method: 'POST',
        body:JSON.stringify(newConnection),
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
    .then((connection) => {
      // call the callback when the request is successful
      // this is where the App component can remove it from state 
      console.log(connection)  ;
      callback();
       //go to bookmark
       console.log(`post call worked`)
    })
    .catch(error => {
       callback(userId, error)
    })
  console.log(`button clicked`)
}

export default function AddConnection(props){
    return(
        <OpenUpContext.Consumer>
            {(context)=>(
                <button className="connection-button post-icon"
                    onClick={()=>{
                        addConnectionRequest(props.userId,props.currentUserId,
                            context.updateConnections);
                            //props.push('/');
                    }}>
                   <FontAwesomeIcon icon={faLink} />

                </button>
            )}


        </OpenUpContext.Consumer>
    )
}