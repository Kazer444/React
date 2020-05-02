import React from 'react';
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form';


export let FormTest=(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='postMessage' component='text'>{props.postMessage}</Field>
            <Field name='forInput' component='textarea'> </Field>
            <div><button>Add</button></div> 
        </form>

    )

}

FormTest = reduxForm({ form: 'dialogs' })(FormTest)

let Dialogs = (props) => {
     let postMessage = props.posts.map(d => <Post message={d.message} key={d.key} />)
     let onSubmit=(values)=>{return props.addPost(values.forInput)}
     return <div>
         <FormTest onSubmit={onSubmit} postMessage={postMessage}/>
     </div>
}


 



export default Dialogs



// let curVal = React.createRef()

// let addPost = () => {
//     let text = curVal.current.value;
//     props.addPost(text)
//     curVal.current.value = ''
// }



        // <div>
        //     <div> {postMessage} </div>
        //     <div> <textarea ref={curVal} name="text" id="text" /></div>
        //     <div> <button onClick={addPost}>Add</button></div>
        // </div>