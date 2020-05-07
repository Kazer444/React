import React, {useDebugValue} from 'react';
import Comment from './addComment/addComment';
import UserInfo from './UserInfo';
import StatusWithHooks from './StatusWithHooks';




let Profile=(props)=>{
    let commentMessage = props.comment.map( d => <div><Comment comment={d} id={d.id} /></div>);

    const onSubmit=values=>{
        return props.addComment(values.forInput)}
        useDebugValue()
     return(
        <div >
         
        <div><UserInfo info={props.info} onSubmit={onSubmit}/></div>
        <div>{commentMessage}</div>
        <div> <StatusWithHooks {...props}/> </div>
   
     
    </div>
     )
 };



 export default Profile