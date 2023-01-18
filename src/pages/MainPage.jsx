import React from 'react'
import LoginPage from '../Components/UserInterface/LoginPage'
import RegisterPage from '../Components/UserInterface/RegisterPage'

// import axios from 'axios'


export default function MainPage() {


  return (
    <React.Fragment>
      <section className="gradient-custom">

        

        <LoginPage />
        <RegisterPage/>
        
      </section>
    </React.Fragment>
  )
}
