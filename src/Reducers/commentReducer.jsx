
let initialState={
  comment:[]
}


export let commentReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case 'postComment':
      let stateCopy={...state,
      comment:[...state.comment,action.textt]}
      return stateCopy

    default: return state
  }

}






