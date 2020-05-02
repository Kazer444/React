import React from 'react';
import Sidebar from './appElements/Sidebar/Sidebar';
import Bottom from './appElements/Bottom/Bottom';
import c from './app.module.css'
import { BodyContainer } from './appElements/Body/connect/connect';
import { Route } from 'react-router-dom';
import { UsersContainer } from './appElements/Users/UsersAPI';
import HeaderContainer from './appElements/Header/HeaderAPI';


let App = () => {

    return (
    <div className={c.app}>
     <div className={c.header}>  <HeaderContainer /> </div>
     <Route exact path='/body/:prof?/:userId?' render={()=>{return <div className={c.body}><BodyContainer/></div>} }/>
     <Route path='/users' render={ ()=>{return <div className={c.users}><UsersContainer/></div>}}></Route>
     <div className={c.sidebar}> <Sidebar/>  </div>
     <div className={c.bottom}>  <Bottom  /> </div>
    </div>
  )
}

export default App;
