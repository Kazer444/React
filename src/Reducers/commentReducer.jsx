
// let initialState = {
//   comment: [
//     { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgSJopuoTI1BcBiJGcLpK_DwwmO1aAuJ85PochzM5I5Paf6_MA&usqp=CAU', alt: '1', comment: 'snakes' },
//     { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnek6IOoJhhrwC3Dy6KmN89oRHpSMBOz-Y7K-3qNr09pSNhp_W&usqp=CAU", alt: "2", comment: 'url' }
//   ]
// }

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






