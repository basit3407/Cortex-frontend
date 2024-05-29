import React from 'react'
import './style.css'
import NavBar from '../NavBar'

type Props = {
  children: React.ReactNode
  style?: React.HTMLAttributes<HTMLDivElement>['style']
}

const AuthContainer = (props: Props) => {
  return (
    <>
      <NavBar />
      <AuthContainerWithoutNavbar {...props} />
    </>
  )
}

export const AuthContainerWithoutNavbar = (props: Props) => {
  return (
    <div className="container-auth">
      <div className="main-content-container-auth">
        <div className="hero-section1-auth" style={props.style}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default AuthContainer
