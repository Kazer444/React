import React from 'react';
import { statusAPI } from '../../API/API';


class Status extends React.Component{
    
    state={
        clicked:false,
        status:''
    }
    componentDidMount(){
        statusAPI.getStatus(7222).then((data)=>{return this.setState({status:data.data}),
        console.log(data)
        })
    }
    
   doubChange=()=>{
       return this.setState({clicked:true})
   }
    
   doubReturn=()=>{
       return this.setState({clicked:false}),
       statusAPI.setStatus(this.state.status)
   }

   changeChase=(e)=>{
    return this.setState({status:e.currentTarget.value})
   }


    render(){
        return  !this.state.clicked?
    <div onDoubleClick={this.doubChange}>{this.state.status}</div>:
        <div><input onBlur={this.doubReturn} autoFocus={true} value={this.state.status} onChange={this.changeChase}/></div>

        
    }
}


export default Status

























// class Status extends React.Component {
 
//     state = {
//         editMode: false,
//         status: 'aa'
//     }


//     componentDidMount() {
//         return statusAPI.getStatus(3).then(
//             (data) => { return this.setState({ status: data.data }) }
//         )
//     }
//     setNewStatus = () => {
//         return  statusAPI.setStatus(this.state.status),
//        this.setState({ editMode: false })
//     }


//     statusChange = (e) => {
//         this.setState({ status: e.currentTarget.value })

//     }
//     render() {
//         return !this.state.editMode ?
//             <div onDoubleClick={() => { return this.setState({ editMode: true }) }}>{this.state.status}</div> :
//             <div >
//                 <input onChange={this.statusChange} onBlur={this.setNewStatus} autoFocus={true} value={this.state.status} />
//             </div>
//     }

// }



// export default Status