import { userAPI } from "../appElements/API/API"


let intialStore = {
    data: {
        id: null,
        login: null,
        email: null
    },
    messages: [],
    resultCode: 1

}


export let authMeReducer = (state = intialStore, action) => {
    switch (action.type) {
        case 'authMe': {
            return { ...state, ...action.action }
        }
        default: return state
    }
}

export let authMe = (data) => ({ type: 'authMe', action: data })

export let authThunk = () => {
    return (dispatch) => {
        userAPI.authMe().then(
            (data) => {
                 return dispatch(authMe(data.data))
            }
        )
    }
}


