import React from 'react';
import Header from './Header';
import { authMe, authThunk } from '../../Reducers/authMeReducer'
import { connect } from 'react-redux'


class HeaderAPI extends React.Component{
    componentDidMount(){ return this.props.authThunk()
    }
    render(){
        return <Header props={this.props.state} authThunk={this.props.authThunk} />
    }
}


let mapStateToProps=(state)=>{return { 
    state:state.authMe,
    loginData:state.login
}}

let HeaderContainer= connect(mapStateToProps,{authMe,authThunk})(HeaderAPI)

export default HeaderContainer

