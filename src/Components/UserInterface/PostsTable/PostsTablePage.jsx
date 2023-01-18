import React from 'react'
import axios from '../../../utils/axios';
import TableBody from './TableBody'
import { toast } from 'react-toastify'
import UpdatePostsPage from '../UpdatePostsPage';
import AddPostsPage from '../AddPostsPage';

export default function PostsTablePage() {
  const isCreate = window.localStorage.getItem('isCreate') === "true" ? true : false;
  const isRead = window.localStorage.getItem('isRead') === "true" ? true : false;



  //read qismi uchun o'zgaruchi
  const [posts, setPosts] = React.useState(['']);
  //create qismi chun o'zgaruchi
  const [addPost, setAddPost] = React.useState({})
  //update qismi uchun o'zgaruchi
  const [updatePost, setUpdatePost] = React.useState({
    title: 'birnima',
    comment: 'birnima',
    country: 'birnima',
    prise: 'birnima',
  })


  //read qismi
  React.useEffect(() => {
    const fetchDate = async () => {
      try {
        const { data } = await axios.get('/product')
        setPosts(data)
      } catch (error) {
        console.log(error);
      }
    }
    isRead && fetchDate()
  }, [posts])

  //delete qismi
  const productDelete = async (e) => {
    try {
      const userId = window.localStorage.getItem('userId')
      const { data } = await axios.delete('/product/' + e + '/' + userId)
      toast(data.message)
    } catch (err) {
      console.log(err);
    }
  }
  //Update qismi
  const updateHendler = (e) => {
    setUpdatePost(posts[e])

  }

  const changeHendler = (e) => {
    const { value, name } = e.target
    setUpdatePost(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const shubmitUpdate = async () => {
    try {
      const userId = window.localStorage.getItem('userId')
      const { data } = await axios.put('/product/' + updatePost._id + '/' + userId, updatePost)
      toast(data.message)
    } catch (error) {

    }
  }


  //Create qismi 
  const addChangeHendler = (e) => {
    const { name, value } = e.target;
    setAddPost(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const shubmitNewPost = async () => {
    try {
      const userId = window.localStorage.getItem('userId')
      const { data } = await axios.post('/product/' + userId, addPost)
      console.log(addPost, userId)
      toast(data.message)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <React.Fragment>
      {isCreate ? (
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addPosts" ><i className="fa-sharp fa-solid fa-plus"></i> Add posts</button>
      ) : (<></>)}
      {isRead ? (
        <> 
          <h3 className='text-center text-white'>Maxsulotlar</h3>
          <table className="table table-hover table-striped  bg-dark text-white mx-auto">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Comment</th>
                <th scope="col">Country</th>
                <th scope="col">Prise</th>
                <th scope="col">Edit</th>

              </tr>
            </thead>
            <tbody>
              {posts.map((data, i) => (
                <TableBody productDelete={productDelete} updateHendler={updateHendler} key={data._id + 1} data={data} index={i} />
              ))}
            </tbody>
          </table>
          <UpdatePostsPage changeHendler={changeHendler} update={updatePost} shubmitUpdate={shubmitUpdate} />
          <AddPostsPage addData={addPost} shubmitNewPost={shubmitNewPost} addChangeHendler={addChangeHendler} />
        </>
      ):(<></>)}

    </React.Fragment>
  )
}


