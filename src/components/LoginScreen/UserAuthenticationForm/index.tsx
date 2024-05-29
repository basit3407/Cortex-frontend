import UsernameInputWidget from '../UsernameInputWidget'
import PasswordInputWidget from '../PasswordInputWidget'
import './style.css'
import messages from './messages.json'
import React from 'react'

function UserAuthenticationForm() {
  return (
    <div className="login-section">
      <UsernameInputWidget />
      <PasswordInputWidget />
      <div className="login-section1">
        {/* Checkbox with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        <div className="login-section2">
          <div className="remember-me-checkbox-container">
            <input
              id="remember me"
              type="checkbox"
              defaultChecked={false}
              className="hidden-input-checkbox"
            />
            <img className="hidden-icon img-content-66044729" />
          </div>
          <label htmlFor="remember me" className="remember-me-label">
            {messages['remember_me']}
          </label>
        </div>
        <p className="forgot-password-link">{messages['forgot_password']}</p>
      </div>
      {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <button className="login-button-style">{messages['login']}</button>
      <div className="account-info-section">
        <p className="account-info-text-style">{messages['dont_account']}</p>
        <p className="sign-up-link-style">{messages['sign_up']}</p>
      </div>
    </div>
  )
}

export default UserAuthenticationForm
