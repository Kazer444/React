import React, { useState, useEffect } from 'react';
import { statusAPI } from '../../API/API';
import { Field, reduxForm } from 'redux-form';


let StatusWithHooks = (props) => {

    let [status, setStatus] = useState(true)
    let [dataStatus, setDataStatus] = useState('')

    useEffect(() => {

        async function a() {
            let a = await statusAPI.getStatus(props.myId)
            setDataStatus(a.data)
        }
        a()
    }, [])


    let func = () => {
        setStatus(false)
    }

    let func2 = () => {
        setStatus(true)
        statusAPI.setStatus(dataStatus)
    }

    let func3 = (e) => { setDataStatus(e.currentTarget.value) }

    let a = ({ input, meta }) => {
        console.log(input.value)
        return <div><input
            value={dataStatus}
            autoFocus={true}
            onChange={(value)=>{input.onChange(value)}} /></div>
    }


    return <div>
        {status? <div onDoubleClick={func}>{dataStatus?dataStatus:'hello'}</div>:
            <div><input value={dataStatus} onBlur={func2} onChange={func3} autoFocus={true}/></div>}
    </div>

    // return <form onSubmit={props.handleSubmit}>
    //     {status ?
    //         <div onDoubleClick={func}>{dataStatus}</div> :
    //         <Field
    //             name='second'
    //             component={a}
    //             onBlur={func2}
    //
    //             onFocus={true} />}
    // </form>


}

// StatusWithHooks = reduxForm({ form: 'status' })(StatusWithHooks)

export default StatusWithHooks












