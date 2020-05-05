import React from 'react'
import dog  from './png/dog.jpg'
import { reduxForm, Field } from 'redux-form'
import c from './UserInfo.module.css'

const Textarea=({input,meta,...props})=>{

    return <div  >
        <div ><textarea {...input}{...props} className={c.dd}  /></div>
    </div>
}
let UserInfo=(props)=>{
  
    return(
        <form onSubmit={props.handleSubmit} >
           <Field name='about me' component='div'>{props.info.aboutMe} </Field>
             <Field name='fullName' component='div'>{props.info.fullName}</Field>
             <div><Field name='dog' component='div'><img src={dog}/></Field></div>
             <Field name='forInput' placeholder='hello' component={Textarea}>    </Field>
             <div><button>Add</button></div>
        </form>
    )
}

UserInfo=reduxForm({form: 'UserInfo'})(UserInfo)


export default UserInfo