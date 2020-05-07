import {userAPI} from "../appElements/API/API"


let initialStore = {
    data: {
        id: null,
        login: null,
        email: null
    },
    messages: [],
    resultCode: 1

};


export let authMeReducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'authMe': {
            return { ...state, ...action.action }
        }
        default: return state
    }
};

export let authMe = (data) => ({ type: 'authMe', action: data })

export let authThunk = (state) => {
    return async (dispatch) => {
        let data=await userAPI.authMe()
        dispatch(authMe(data.data))

            }
};


// async function a() {
//     let a = await statusAPI.getStatus(props.myId)
//     setDataStatus(a.data)
// }


