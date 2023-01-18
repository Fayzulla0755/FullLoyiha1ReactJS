import React from 'react'
import axios from '../../../utils/axios'
import UpDateAdminPage from '../UpDateAdminPage';
import TableBody from './TableBody'
import { toast } from 'react-toastify'
import AddAdmin from '../AddAdmin';

export default function UsersTablePage() {
  const isAdmin = window.localStorage.getItem('isAdmin') === "true" ? true : false
  const isCreate = window.localStorage.getItem('isCreate') === "true" ? true : false;
  const isRead = window.localStorage.getItem('isRead') === "true" ? true : false;
  //read qismi uchun o'zgaruchi 
  const [users, setUsers] = React.useState([''])
  //add qismi uchun
  const [newUser, setNewUser] = React.useState({
    fullname: '',
    user_email: '',
    user_login: '',
    user_rol: '',
    admin: false,
    create: false,
    deletee: false,
    update: false,
    read: false,
  })

  //Upadate o'zgaruchi
  const [updateUsers, setUpdateUsers] = React.useState({
    fullname: 'updateUsername',
    user_email: 'email',
    user_login: 'login',
  });


  //Read qismi

  React.useEffect(() => {
    const fetchDate = async () => {

      try {
        const userId = window.localStorage.getItem('userId')
        const { data } = await axios.get('/user/' + userId)
        setUsers(data)
      } catch (err) {
        console.log(err);
      }
    }
    isRead && fetchDate()
  }, [users])



  //Update qismi
  const updateOnchange = (e) => {
    setUpdateUsers(users[e])
    console.log(updateUsers);
  }

  const henlerChange = (e) => {
    const { name, value } = e.target;
    setUpdateUsers(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const henlerCheck = (e) => {
    const { name, checked } = e.target;
    setUpdateUsers(prev => ({
      ...prev,
      [name]: checked,
    }))
  }

  const submitUpdate = async () => {
    try {
      const userId = window.localStorage.getItem('userId')
      const { data } = await axios.put('/user/' + updateUsers._id + '/' + userId, updateUsers)
      toast(data.message)
    } catch (error) {
    }
  }

  //Delete qismi
  const deleteUser = async (e) => {
    try {
      const id = e;
      const userId = window.localStorage.getItem('userId')
      const { data } = await axios.delete('/user/' + id + '/' + userId)
      toast(data.message)
    } catch (err) {
      console.log(err);
    }
  }

  //Add users qismi
  const addHenlerChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const addHenlerCheck = (e) => {
    const { name, checked } = e.target;
    setNewUser(prev => ({
      ...prev,
      [name]: checked,
    }))
  }

  const addSubmitUpdate = async () => {
    try {
      const userId = window.localStorage.getItem('userId')
      const { data } = await axios.post('/user/admin/' + userId, newUser)
      toast(data.message)
    } catch (error) {
    }
  }

  return (
    <React.Fragment>
      {isCreate && isAdmin ? (
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addUserModal"><i className="fa-sharp fa-solid fa-plus"></i> Add User</button>
      ) : (<></>)}
      {isRead && isAdmin ? (
        <><h3 className='text-center text-white'>Foydalanuvchilar</h3>
          <table className="table table-hover text-white bg-dark table-striped  mx-auto">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">fulname</th>
                <th scope="col">Email</th>
                <th scope="col">Login</th>
                <th scope="col">Rol</th>
                <th scope="col">isAdmin</th>
                <th scope="col">create</th>
                <th scope="col">update</th>
                <th scope="col">delete</th>
                <th scope="col">read</th>
                <th scope="col">Edit</th>

              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <TableBody update={updateOnchange} deleteUser={deleteUser} key={i} data={user} index={i} />)
              )}
            </tbody>
          </table>
          <AddAdmin newUser={newUser} addHenlerChange={addHenlerChange} addHenlerCheck={addHenlerCheck} addSubmitUpdate={addSubmitUpdate} />
          <UpDateAdminPage updatee={updateUsers} submitUpdate={submitUpdate} henlerCheck={henlerCheck} henlerChange={henlerChange} />
        </>
      ):(<></>)}


    </React.Fragment>
  )
}
