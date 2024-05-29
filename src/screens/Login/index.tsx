import React from 'react'
import WelcomeScreen from '../../components/LoginScreen/WelcomeScreen'
import AuthContainer from '../../components/AuthContainer'

const Login = () => {
  return (
    <AuthContainer>
      <WelcomeScreen />
    </AuthContainer>
  )
}

export default Login
