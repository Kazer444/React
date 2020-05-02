import React from 'react'
import { Redirect } from 'react-router-dom';

let withAuthCheck = (Component) => {
    class withAuthChecking extends React.Component {

        render() {
            return this.props.state.authMe.resultCode === 0 ?
                <div><Component {...this.props} /></div> : <div><Redirect to='/login' /></div>
        }
    }
    return withAuthChecking
}

export default withAuthCheck