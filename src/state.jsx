
export let store={

  getState(){return this.state},

   state:{  DialogElements:[
    {id:1,message:'Hello', key:1},
    {id:2,message:'How are you',key:2} ,
    {id:3,message1: 'a',key:3 } 
   ],

   CommentElements:[
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgSJopuoTI1BcBiJGcLpK_DwwmO1aAuJ85PochzM5I5Paf6_MA&usqp=CAU', alt:'1', comment:'snakes'},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnek6IOoJhhrwC3Dy6KmN89oRHpSMBOz-Y7K-3qNr09pSNhp_W&usqp=CAU", alt:"2", comment:'url'}
   ]
  },


   Rerender(){
      console.log('something added')},

  

    postReducer(text){
      let newPush={id:4,message:text,key:4}
      this.state.DialogElements.push(newPush)
      this.Rerender()},

      commentReducer(comment){
        let newComment={img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgSJopuoTI1BcBiJGcLpK_DwwmO1aAuJ85PochzM5I5Paf6_MA&usqp=CAU', alt:'3', comment:comment}
        this.state.CommentElements.push(newComment)
        this.Rerender()
      },
    
     subscribe(observer){
     this.Rerender=observer
    },

        dispatch(action){
          switch(action.type){
          case 'postPush':return this.postReducer(action.textt)
          case'postComment':return this.commentReducer(action.textt)
          }
      }
    

    }





  
 
