import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const activeStyles = {
    color: 'white',

  }
  const [token, setToken] = React.useState(false)

  setInterval(() => {
    setToken(window.localStorage.getItem('token') || false)
  }, 1000)
  const exiteUsers=()=>{
    window.localStorage.clear()
    // window.localStorage.removeItem('userId')
    // window.localStorage.removeItem('isAdmin')
    // window.localStorage.removeItem('isCreate')
    // window.localStorage.removeItem('isUpdate')
    // window.localStorage.removeItem('isRead')
    // window.localStorage.removeItem('isDeletee')
  }



  return (
    <nav className="navbar navbar-expand-lg  navbar navbar-dark bg-dark "  >
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to={"/"} style={({ isActive }) => isActive ? activeStyles : undefined} >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/posts"} style={({ isActive }) => isActive ? activeStyles : undefined} >Post's</NavLink>
            </li>

          </ul>
          <div className="autarizatsiya ">
            {token ? (
              <>
                <Link to={'/admin'}><i className="fa-solid fa-user mx-3 fs-5"> Profil</i></Link>
                <Link to={'/'} ><i onClick={exiteUsers} className="fa-solid fa-right-from-bracket fs-5"> </i></Link>
              </>
            ) : (
              <div>
                <button type="button" className="btn btn-warning viewLogin" data-bs-toggle="modal" data-bs-target="#loginModal">
                  Login
                </button>
                <button type="button" className="btn btn-outline-warning viewLogin mx-2" data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                  Ro'yhatdan o'tish
                </button>
              </div>)}


          </div>
        </div>
      </div>
    </nav>
  )
}
