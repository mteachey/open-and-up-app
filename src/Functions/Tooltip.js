export const TooltipMobile = (usernameInput, users)=>{
    let user = users.find(user=>user.username===usernameInput)
    if(user){
      return user.id}
    else{return}
}