import StylishContentBox from '../StylishContentBox'
import UserAuthenticationForm from '../UserAuthenticationForm'
import SvgIcon1 from './icons/SvgIcon1'
import './style.css'
import messages from './messages.json'
import React from 'react'

function WelcomeScreen() {
  return (
    <div className="hero-section">
      <div className="center-content-panel">
        <p className="hero-title-text-style">{messages['welcome_corlee']}</p>
        <p className="central-text-block">
          {messages['lrem_ipsum_suledes_plankning_till_heterossade_tosn']}
        </p>
        {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        <button className="button-with-icon">
          <SvgIcon1 className="svg-container" />
          {messages['login_google']}
        </button>
        <StylishContentBox />
        <UserAuthenticationForm />
      </div>
      <div className="vertical-image-container">
        <img
          src="/assets/img_1091_3084_13ce55.jpeg"
          className="image-container-fullscreen"
        />
      </div>
    </div>
  )
}

export default WelcomeScreen
