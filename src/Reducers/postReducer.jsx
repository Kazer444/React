

let initialState = {
  posts: [
    { id: 1, message: 'Hello', key: 1 },
    { id: 2, message: 'How are you', key: 2 }
    ]
  }



    export let postReducer = (state = initialState, action) => {
      switch (action.type) {
        case 'postPush':
          let newPush = { id: 4, message: action.textt, key: 4 }
          let stateCopy={...state,
          posts:[...state.posts,newPush]}
          return stateCopy;
        default: return state
      }
}





