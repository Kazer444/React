import React from 'react'
import { Field, reduxForm } from 'redux-form'



let Login = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>Login</div>
        <div><Field name='email' component={renderField} validate={[maxLength]}/></div>
        <div><Field name='password' component={renderField} type='password' validate={[maxLength]}/></div>
        <div><Field name='rememberMe' component={renderField} type='checkbox'/></div>
        <button disabled={props.submitting}>Login</button>
    </form>

}

let maxLength = value => value && value.length > 30 ? 'max' : undefined


const renderField = ({ input, type, meta }) => {
    return <div>
        <input {...input} type={type} />
        <div>{meta.error || meta.warning ? <span>{meta.error}</span> : undefined}</div>
    </div>

}

Login = reduxForm({ form: 'login' })(Login)


export default Login