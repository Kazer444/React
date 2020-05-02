import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import c from './Header.module.css'
import { LogInfo } from './logInfo';
import { loginAPI } from '../API/API';

let Header = (props) => {

let logout=()=>{
    return  loginAPI.logout().then(data=>data.data.resultCode===0?props.authThunk():null ) 
}


    return (
        <div className={c.main}>
            <div className={c.profile}> <NavLink to='/body/profile'>Profile</NavLink></div>
            <div className={c.dialogs}> <NavLink to='/body/Dialogs'>Dialogs</NavLink></div>
            <div className={c.users}> <NavLink to='/users'>Users</NavLink></div>
            <div className={c.login}>
            <NavLink to='/body/login' onClick={props.authThunk}>Login </NavLink>
                {props.props.resultCode===1?null:<div><button onClick={logout}>Logout</button></div>}
                
                
                <Route path='/body/login' render={()=>{return <LogInfo {...props} />}} />
            </div>
        </div>
        
    )
    
}

export default Header