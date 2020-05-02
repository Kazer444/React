import React from 'react'
import { Field, reduxForm } from 'redux-form'



export let LogInfo=(props)=>{
    return props.props.resultCode===1?<div>Залогинься</div>:
        <form>
           <div><Field name='email' component='div'>{props.props.data.email}</Field></div> 
           <div> <Field name='id' component='div'>{props.props.data.id}</Field></div>
           <div>  <Field name='login' component='div'>{props.props.data.login}</Field></div>
        </form>

}

LogInfo=reduxForm({form:'logInfo'})(LogInfo)