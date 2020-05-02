import { createStore, combineReducers, applyMiddleware } from "redux";
import { postReducer } from "./Reducers/postReducer";
import { commentReducer } from "./Reducers/commentReducer";
import { usersReducer } from "./Reducers/UsersReducer";
import UserIdReducer from "./Reducers/UserIdReducer";
import thunkMiddleware from 'redux-thunk'
import { authMeReducer } from "./Reducers/authMeReducer";
import { reducer } from "redux-form";
import { loginReducer } from "./Reducers/loginReducer";

let reducers=combineReducers(
  {posts:postReducer,
  comment:commentReducer,
  users:usersReducer,
  id:UserIdReducer,
  authMe:authMeReducer,
  login:loginReducer,
  form:reducer

})


export let store=createStore(reducers,applyMiddleware(thunkMiddleware))

window.store=store






  































// import { createStore, combineReducers } from "redux"
// import { commentReducer } from "./Reducers/commentReducer"
// import { postReducer } from "./Reducers/postReducer"


// let reducers=combineReducers({
//   comment:commentReducer,
//   posts:postReducer
// })

//  export let store = createStore(reducers)








