const url = 'http://localhost:3000/api'
const authURL = 'http://localhost:3000'
window.RequestSnacks = {
  all(){
    return axios.get(`${url}/snacks`)
  },
  one(id){
    return axios.get(`${url}/snacks/${id}`)
  },
  oneWithReviews(id){
    return axios.all([axios.get(`${url}/snacks/${id}`), axios.get(`${url}/snacks/${id}/reviews`)])
  }
}

window.Auth = {
  login(data){
    return axios.post(`${authURL}/auth/login`, data)
      .then(newToken => {
<<<<<<< HEAD
        console.log(newToken);
=======

>>>>>>> 4cfd89673e82c451403dff4ea5b88890d8d9ca33
        this.setToken(newToken.data.token)
        Login.success()
        renderSnacks()
      })
      .catch(err => {
        Login.errorMessage(err)
      })
  },
  signUp(data){
    return axios.post(`${authURL}/auth/signup`, data)
      .then(res => {
        SignUp.success(res.data)
        window.setTimeout(render, 500)
        window.setTimeout(SignUp.closeModal, 1000)
      })
      .catch(err => console.log(err))
  },
  setToken(token){
    localStorage.setItem('token', token.token)
    localStorage.setItem('userId', token.userInfo.id)
    localStorage.setItem('userName', token.userInfo.firstname)
    localStorage.setItem('admin', token.userInfo.admin)
  },
  getToken(){
    let token = localStorage.getItem('token')
    return token
  },
  testValidation(token){
    return axios.get(`${authURL}/auth/validate`, {headers: {authorization: token}})
      .then(res => console.log(res.data))
  }
}

window.Admin = {
  postSnack(data){
    console.log(data)
    return axios.post(`${url}/snacks`, data )
    .then(message=>{
      return alert(`added Snack:${data.name}`)
    })
  },
  delSnack(data){

  }
}
