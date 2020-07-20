import React from 'react';
import OpenUpContext from '../OpenUpContext.js';
import { GetConnectionId } from '../Functions/GetConnectionId'
import config from '../config.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlink } from '@fortawesome/free-solid-svg-icons';

function deleteConnectionRequest(userId,connections, callback){
    let connectionId = GetConnectionId(userId, connections);
    let url = `${config.API_DEV_ENDPOINT}/connections/${connectionId}`;
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
        return 
    })
    .then(() => {
      // call the callback when the request is successful
      // this is where the App component can remove it from state
       callback()
       
    })
    .catch(error => {
        console.log(`there was an error`)
        console.log(error)
    })
}

export default function DeleteConnection(props){
    return(
        <OpenUpContext.Consumer>
            {(context)=>(
                <button className="connection-button post-icon delete-icon"
                    onClick={()=>{
                        deleteConnectionRequest(props.userId,context.connections,context.updateConnections);
                    }}>
                   <FontAwesomeIcon icon={faUnlink} />

                </button>
            )}
        </OpenUpContext.Consumer>
    )
}