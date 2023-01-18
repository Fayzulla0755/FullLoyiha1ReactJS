import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

export default function RegisterPage() {
  const [newUser, setNewUser]= React.useState({
    fullname:'',
    user_login:'',
    user_email:'',
    user_password:'',
  })

  const henlerChange =(e)=>{
    const {name, value}=e.target;
    setNewUser(prev=>({
      ...prev,
      [name]:value
    }))
  }
  const submitNewUser = async()=>{
    try {
      const {data} =await axios.post('http://localhost:5000/user',newUser)
      toast(data.message)
    } catch (error) {
      
    }
  }
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="card bg-dark text-white modal-content p-2" style={{ borderRadius: "1rem" }}>
          <div className="card-body  text-center">



            <h2 className="fw-bold mb-2 text-uppercase">Register</h2>


            <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typeEmailX1">Fullname</label>
              <input type="text" id="typeEmailX1" className="form-control form-control-lg" value={newUser.fullname} onChange={henlerChange} name='fullname' />

            </div>

            <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typeEmailX2">Email</label>
              <input type="email" id="typeEmailX2" className="form-control form-control-lg" value={newUser.user_email} onChange={henlerChange} name='user_email' />

            </div>

            <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typeEmailX3">Login</label>
              <input type="text" id="typeEmailX3" className="form-control form-control-lg"  value={newUser.user_login} onChange={henlerChange} name='user_login'/>

            </div>

            <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typePasswordX2">Password</label>
              <input type="password" id="typePasswordX2" className="form-control form-control-lg" value={newUser.user_password} onChange={henlerChange} name='user_password'/>

            </div>


            <button className='btn btn-outline-light btn-lg w-100 ' type="button" data-bs-dismiss="modal" onClick={submitNewUser}>Register</button>






          </div>
        </div>
      </div>
    </div>
  )
}


