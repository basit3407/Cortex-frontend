import React from 'react'
import './style.css'
import WelcomeScreen from '../../components/LoginScreen/WelcomeScreen'
import NavBar from '../../components/NavBar'

const Login = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="main-content-container">
          <div className="hero-section1">
            <WelcomeScreen />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
