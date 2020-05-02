import React from 'react'


let UsersMap = (props) => {
  let followFlag = () => {
    return (props.followed === true ? <div>unfollow</div> : <div>follow</div>)
  }




  return (<div>
    <div> {props.FullName}</div>
    <div> {props.Country}</div>
    <button disabled={props.idFilter.some(id=>id===props.id)}
      onClick={() => {
        props.followed === true ?
          props.unfollowFunc(props.id) :
          props.followFunc(props.id)
      }} >{followFlag()}</button>

  </div>)
}

export default UsersMap

