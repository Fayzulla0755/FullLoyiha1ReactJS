import React,{useEffect,useState} from 'react'
import Cards from '../Components/UserInterface/Cards'
import LoginPage from '../Components/UserInterface/LoginPage';
import RegisterPage from '../Components/UserInterface/RegisterPage';
import {ToastContainer} from 'react-toastify'
export default function PostsPage() {
  const [posts, setPosts]= useState([]);

  useEffect(()=>{
   fetch('http://localhost:5000/product')
   .then(res=>res.json())
   .then(data=>setPosts(data))
   .catch(err=>console.log(err))

  },[])

  return (
    <div className=' gradient-custom d-flex flex-wrap justify-content-center '>
    {posts.map(post=>(
      <Cards key={post._id} post={post} />
    ))}
        <LoginPage />
        <RegisterPage/>
        <ToastContainer  position='top-right' />
    </div>
  )
}
