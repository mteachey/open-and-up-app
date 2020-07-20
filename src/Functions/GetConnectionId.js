export const GetConnectionId = (userId, connections) =>{
    
    let connectionId = connections.find(connection=>connection.followee_id===userId).id;

    console.log(connectionId)
    
    return connectionId
}
    
