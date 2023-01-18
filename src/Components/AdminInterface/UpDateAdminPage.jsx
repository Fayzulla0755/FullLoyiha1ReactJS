import React from 'react'

export default function UpDateAdminPage({ updatee, henlerChange, henlerCheck, submitUpdate }) {
  const { fullname, user_email, user_login, user_rol, admin, create, deletee, update, read } = updatee;
  return (
    <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="card bg-dark text-white modal-content p-1" style={{ borderRadius: "1rem" }}>
          <div className="card-body  text-center">



            <h4 className="fw-bold mb-2 text-uppercase">Update User</h4>


            <div className="form-outline form-white mb-2">
              <label className="form-label" htmlFor="typeEmailX1">Fullname</label>
              <input type="text" id="typeEmailX1" className="form-control form-control-lg" value={fullname ? fullname : 'fullname'} onChange={henlerChange} name='fullname' />

            </div>

            <div className="form-outline form-white mb-2">
              <label className="form-label" htmlFor="typeEmailX2">Email</label>
              <input type="email" id="typeEmailX2" className="form-control form-control-lg" value={user_email ? user_email : ''} onChange={henlerChange} name='user_email' />

            </div>

            <div className="form-outline form-white mb-2">
              <label className="form-label" htmlFor="typeEmailX3">Login</label>
              <input type="text" id="typeEmailX3" className="form-control form-control-lg" value={user_login} onChange={henlerChange} name='user_login' />

            </div>


            <div className="form-outline form-white mb-2">
              <label className="form-label" htmlFor="typePasswordX2">User Rol</label>
              <input type="text" id="typePasswordX2" className="form-control form-control-lg" value={user_rol} onChange={henlerChange} name='user_rol' />

            </div>
            <div className="form-outline form-white mb-2">
              <label className="form-label">Admin: <input type={'checkbox'} checked={admin} style={{ width: "40px" }} onChange={henlerCheck} name='admin' /></label>
              <label className="form-label">Create: <input type={'checkbox'} checked={create} style={{ width: "40px" }} onChange={henlerCheck} name='create' /></label>
              <label className="form-label">Update: <input type={'checkbox'} checked={update} style={{ width: "40px" }} onChange={henlerCheck} name='update' /></label>
              <label className="form-label">Delete: <input type={'checkbox'} checked={deletee} style={{ width: "40px" }} onChange={henlerCheck} name='deletee' /></label>
              <label className="form-label">Read: <input type={'checkbox'} checked={read} style={{ width: "40px" }} onChange={henlerCheck} name='read' /></label>


            </div>


            <button className='btn btn-outline-light btn-lg w-100 ' type="button" data-bs-dismiss="modal" onClick={submitUpdate} >Update</button>






          </div>
        </div>
      </div>
    </div>
  )
}
