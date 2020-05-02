import { connect } from "react-redux";
import Body from "../Body";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { authThunk } from "../../../Reducers/authMeReducer";
import { createSelector } from "reselect";
import {loginThunk} from "../../../Reducers/loginReducer";



let post=(text)=>({type:'postPush', textt:text})
let comment=(text)=>({type:'postComment',textt:text})
let userId=(id)=>({type:'userId',action:id})

let stateSelect=(state)=>{
    return state
}

let getState= createSelector(stateSelect,(state)=>{return state})


let mapStateToProps=(state)=>{
    return {state: getState(state)};

}




export let BodyContainer=compose(
    connect(mapStateToProps,{post,comment,userId,authThunk, loginThunk }),
    withRouter,
    // withAuthCheck
)(Body)

