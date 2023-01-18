import React from 'react'

export default function AddAdmin({ newUser, addHenlerChange, addHenlerCheck, addSubmitUpdate }) {
  const { fullname, user_email, user_login, user_rol,user_password, admin, create, deletee, update, read } = newUser
  return (
    <div className="modal fade" id="addUserModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="card bg-dark text-white modal-content p-1" style={{ borderRadius: "1rem" }}>
          <div className="card-body  text-center">



            <h4 className="fw-bold mb-2 text-uppercase">Update User</h4>


            <div className="form-outline form-white mb-2">
              <label className="form-label" htmlFor="typeEmailX11">Fullname</label>
              <input type="text" id="typeEmailX11" className="form-control form-control-lg" value={fullname} onChange={addHenlerChange} name='fullname' />

            </div>

            <div className="form-outline form-white mb-2">
              <label className="form-label" htmlFor="typeEmailX22">Email</label>
              <input type="email" id="typeEmailX22" className="form-control form-control-lg" value={user_email ? user_email : ''} onChange={addHenlerChange} name='user_email' />

            </div>

            <div className="form-outline form-white mb-2">
              <label className="form-label" htmlFor="typeEmailX34">Login</label>
              <input type="text" id="typeEmailX34" className="form-control form-control-lg" value={user_login} onChange={addHenlerChange} name='user_login' />

            </div>


            <div className="form-outline form-white mb-2">
              <label className="form-label" htmlFor="typePasswordX25">User Rol</label>
              <input type="text" id="typePasswordX25" className="form-control form-control-lg" value={user_rol} onChange={addHenlerChange} name='user_rol' />

            </div>
            <div className="form-outline form-white mb-2">
              <label className="form-label" htmlFor="typePasswordX23">Password</label>
              <input type="password" id="typePasswordX23" className="form-control form-control-lg" value={user_password} onChange={addHenlerChange} name='user_password' />

            </div>
            <div className="form-outline form-white mb-2">
              <label className="form-label">Admin: <input type={'checkbox'} checked={admin} style={{ width: "40px" }} onChange={addHenlerCheck} name='admin' /></label>
              <label className="form-label">Create: <input type={'checkbox'} checked={create} style={{ width: "40px" }} onChange={addHenlerCheck} name='create' /></label>
              <label className="form-label">Update: <input type={'checkbox'} checked={update} style={{ width: "40px" }} onChange={addHenlerCheck} name='update' /></label>
              <label className="form-label">Delete: <input type={'checkbox'} checked={deletee} style={{ width: "40px" }} onChange={addHenlerCheck} name='deletee' /></label>
              <label className="form-label">Read: <input type={'checkbox'} checked={read} style={{ width: "40px" }} onChange={addHenlerCheck} name='read' /></label>


            </div>


            <button className='btn btn-outline-light btn-lg w-100 ' type="button" data-bs-dismiss="modal" onClick={addSubmitUpdate} >Update</button>






          </div>
        </div>
      </div>
    </div>
  )

}
