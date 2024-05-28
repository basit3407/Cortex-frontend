import React from 'react'
import SvgIcon1 from './icons/SvgIcon1'
import SvgIcon2 from './icons/SvgIcon2'
import SvgIcon3 from './icons/SvgIcon3'
import SvgIcon4 from './icons/SvgIcon4'
import SvgIcon5 from './icons/SvgIcon5'
import messages from './messages.json'
import './style.css'

const NavBar = () => {
  return (
    <div className="container">
      <div className="flex-centered-row">
        <img
          src="/assets/img_I1091_2359_992_9334_9ba603.png"
          className="product-thumbnail"
        />
        <div className="navigation-bar">
          <div className="horizontal-nav-container">
            <div className="product-card-container">
              <p className="product-info-card">{messages['products']}</p>
              <SvgIcon1 className="svg-container" />
            </div>
            <p className="product-info-card">{messages['events']}</p>
            <p className="product-info-card">{messages['about_us']}</p>
          </div>
          <div className="horizontal-flex-container-with-icons">
            <div className="callout-container">
              <SvgIcon2 className="svg-container1" />
            </div>
            <p className="product-info-card">{messages['call_us']}</p>
            <div className="contact-section">
              <div className="card-container-with-title">
                <SvgIcon3 className="svg-container2" />
              </div>
              <div className="card-container-with-title">
                <SvgIcon4 className="svg-container2" />
              </div>
              <div className="card-container-with-title">
                <SvgIcon5 className="svg-container2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
