


    let initialStore={  
          aboutMe: "я",
          contacts: {
          facebook: "facebom",
          website: null,
          vk: "vk.cmych",
          twitter: "https://twr.com/@sdf",
          instagram: "instom/sds",
          youtube: null,
          github: "githom",
          mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "неурачусь",
        fullName: "samurw name",
        userId: 2,
        photos: {
          small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
          large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
}}
    
let UserIdReducer=(state=initialStore,action)=>{
   switch(action.type){
       case 'userId':{
           return {...state,...action.action}}
        default: return state
       }
   }




export default UserIdReducer