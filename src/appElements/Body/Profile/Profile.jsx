import React from 'react';
import Comment from './addComment/addComment';
import UserInfo from './UserInfo';
import Status from './Status';




let Profile=(props)=>{
    let commentMessage = props.comment.map( d => <div><Comment comment={d} /></div>)

    const onSubmit=values=>{
        return props.addComment(values.forInput)}
     return(
        <div >
         
        <div><UserInfo info={props.info} onSubmit={onSubmit}/></div>
        <div>{commentMessage}</div>
        <div> <Status/> </div>
   
     
    </div>
     )
 }



 export default Profile