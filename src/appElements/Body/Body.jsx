import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import axios from 'axios';
import Login from './Login/login';
import { loginAPI } from '../API/API';




class Body extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`).then((data) => { this.props.userId(data.data) })
    }

   
    loggining=(props)=>{
        return  loginAPI.login(props.email,props.password,props.rememberMe).
        then(data=>data.data.resultCode===0?
            this.props.authThunk():
         null)
    }


    render() {
        debugger;
        // return this.props.state.authMe.resultCode===0? 
        return <div>
            <Route path={`/body/profile/:${this.props.match.params.userId}?`} render={() => {
                return <Profile comment={this.props.state.comment.comment}
                    addComment={this.props.comment} info={this.props.state.id} />
            }} />

            <Route exact path={`/body/Dialogs/:${this.props.match.params.userId}?`}
                render={() => {
                    return <Dialogs posts={this.props.state.posts.posts}
                        addPost={this.props.post} />
                }} />
            <Route path='/body/login' render={() => {
                return <Login onSubmit={this.props.loginThunk} />
            }} />
        </div>
        {/* </div>:<Redirect to='/login'/> */ }
    }
}


export default Body



