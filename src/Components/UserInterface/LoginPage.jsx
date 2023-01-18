import React from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

export default function LoginPage() {
  const [user , setUser]=React.useState({
    login:'',
    password:''
  })
  const changeHendler =(e)=>{
    const {name ,value} =e.target;
    setUser(prev=>({
      ...prev,
      [name]:value
    }))
  }


 const  shubmitHandler=  async ()=>{
      try {
      const {data} =await axios.post('http://localhost:5000/user/signin',{
        user_login:user.login,
        user_password:user.password
      })
      if (data.accessToken) {
        window.localStorage.setItem('token', data.accessToken);
        window.localStorage.setItem('userId' , data.userId);
        window.localStorage.setItem('isAdmin',data.userData.admin)
        window.localStorage.setItem('isCreate',data.userData.create)
        window.localStorage.setItem('isUpdate',data.userData.update)
        window.localStorage.setItem('isRead',data.userData.read)
        window.localStorage.setItem('isDeletee',data.userData.deletee)
    } 
    setUser({
      login:'',
      password:''
    })
    toast(data.message)
      return data
      } catch (err) {
        console.log(err);
      }
     
  }

  return (
    //  Modal 
    <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">

        <div className="card bg-dark text-white modal-content p-5" style={{ borderRadius: "1rem" }}>
          <div className="card-body p-3 text-center">

            <div className="mb-md-3 mt-md-4 pb-2">

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <div className="form-outline form-white mb-4">
                <label className="form-label" htmlFor="typeEmailX">Login</label>
                <input type="text" id="typeEmailX" className="form-control form-control-lg" onChange={changeHendler} value={user.login} name='login'/>

              </div>

              <div className="form-outline form-white mb-4">
                <label className="form-label" htmlFor="typePasswordX">Password</label>
                <input type="password" id="typePasswordX" className="form-control form-control-lg" onChange={changeHendler} value={user.password} name='password'/>

              </div>

              <button className="btn btn-outline-light btn-lg px-5 mx-2" type="button" onClick={shubmitHandler} data-bs-dismiss="modal">Login</button>
              <button type="button" className="btn btn-outline-light btn-lg px-5 mx-2" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#exampleModal">
                Register
              </button>

            </div>



          </div>
        </div>
      </div>
    </div>
  )
}
