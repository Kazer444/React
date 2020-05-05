import { loginAPI } from "../appElements/API/API"
import { stopSubmit } from "redux-form"

let initialStore = {
    email: null,
    password: null,
    rememberMe: null
}



export let loginReducer = (state = initialStore, action) => {

    switch (action.type) {
        case 'login':
            return { ...state, ...action.data }
        default: return state
    }
}


let loginAC = (action) => ({ type: 'login', data: action })



export let loginThunk = props => dispatch => {
    loginAPI.login(props.email, props.password, props.rememberMe).then(
        data => {
            data.data.resultCode == 0 ?
                dispatch(loginAC(data.data)) :
                dispatch(stopSubmit('login', { email: 'some error' }))

        }

    )
}