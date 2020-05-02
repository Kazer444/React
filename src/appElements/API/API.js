import axios from "axios";


const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': '2a5c057f-adf0-483b-a14e-555af5b69a41' }
})

export const userAPI = {
  getUsers(count) {
    return instance.get(`users?count=${count}`)
  },
  follow(id) {
    return instance.post(`follow/${id}`)
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`)
  },

  authMe() {
    return instance.get('auth/me')
  }
}

export const statusAPI = {
  getStatus(id) { return instance.get(`profile/status/${id}`) },
  
  setStatus(status) { return instance.put('profile/status', { status }) }
}


export let loginAPI={
 login(email,password,rememberMe=false){ return instance.post('/auth/login',{email,password,rememberMe})},
 logout(){return instance.delete('/auth/login')}
}



















