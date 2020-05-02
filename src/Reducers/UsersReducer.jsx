import { userAPI } from "../appElements/API/API"

let initialStore = {
    users: [],
    count: 2,
    isFetching: false,
    idFilter: []
}



export let usersReducer = (state = initialStore, action) => {

    switch (action.type) {

        case 'follow':
            return {
                ...state,
                users: state.users.map(d => {
                    if (d.id === action.status) {
                        return { ...d, followed: true }
                    }
                    return d
                })
            }


        case 'unfollow':

            return {
                ...state,
                users: state.users.map(d => {
                    if (d.id === action.status) {
                        return { ...d, followed: false }
                    }
                    return d
                })
            }


        case 'setUsers':
            return {
                ...state,
                users: [...action.status]
            }

        case 'showMore':
            if (action.type === 'showMore') {
                let stateCopy = {
                    ...state,
                    count: action.status
                }
                return stateCopy
            }
        case 'togleIsFetching': {
            let stateCopy = {
                ...state,
                isFetching: action.status
            }
            return stateCopy
        }
        case 'isLoading': {
            let stateCopy = {
                ...state,
                idFilter: action.status ? [...state.idFilter, action.id] : state.idFilter.filter(id => id !== action.id)
            }
            return stateCopy
        }
        default: return state
    }
}


export let setUsers = (action) => ({ type: 'setUsers', status: action })
export let showMore = (action) => ({ type: 'showMore', status: action })
export let togleIsFetching = (action) => ({ type: 'togleIsFetching', status: action })
export let follow = (action) => ({ type: 'follow', status: action })
export let unfollow = (action) => ({ type: 'unfollow', status: action })
export let isLoading = (action, id) => ({ type: 'isLoading', status: action, id: id })



export const UsersThunk = (count) => {

    return (dispatch) => {
        dispatch(togleIsFetching(false))
        userAPI.getUsers(count).then(
            (data) => {
                dispatch(togleIsFetching(true))
                dispatch(setUsers(data.data.items))
            })
    }
}

export const followThunk = (id) => {
    return (dispatch) => {
        dispatch(isLoading(true, id))
        userAPI.follow(id).then(
            data => {
                return data.data.resultCode === 0 ?
                    dispatch(follow(id)) : null,
                    dispatch(isLoading(false, id))

                

            })
    }
}

export const unfollowThunk = (id) => {
    return (dispatch) => {
        dispatch(isLoading(true, id))
        userAPI.unfollow(id).then(
            data => {
                return data.data.resultCode === 0 ?
                    dispatch(unfollow(id)) : null,
                    dispatch(isLoading(false, id))
            })
    }
}