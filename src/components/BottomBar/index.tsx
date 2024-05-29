import NewsletterSubscriptionSection from './NewsletterSubscriptionSection'
import SvgIcon1 from './icons/SvgIcon1'
import SvgIcon2 from './icons/SvgIcon2'
import SvgIcon3 from './icons/SvgIcon3'
import SvgIcon4 from './icons/SvgIcon4'
import './style.css'
import messages from './messages.json'
import React from 'react'

function BottomBar() {
  return (
    <div className="newsletter-section1">
      <div className="hero-section-bb">
        <NewsletterSubscriptionSection />
        <div className="flex-container-with-icons">
          <div className="navbar-container">
            <p className="unique-text-block">{messages['products']}</p>
            <p className="unique-text-block">{messages['events']}</p>
            <p className="unique-text-block">{messages['about_us']}</p>
          </div>
          <div className="sidebar-container">
            <img src="/assets/logo_white.png" className="image-container-bb" />
          </div>
          <div className="flexbox-menu-container">
            <SvgIcon1 className="svg-container" />
            <SvgIcon2 className="svg-container" />
            <SvgIcon3 className="svg-container1" />
            <SvgIcon4 className="svg-container1" />
          </div>
        </div>
        <div className="contact-info-section2">
          <div className="contact-info-section3">
            <div className="contact-info-section">
              <p className="unique-text-block">{messages['33_123456_789']}</p>
              <div className="contact-info-divider" />
              <p className="unique-text-block">{messages['infocorleecom']}</p>
            </div>
            <p className="contact-info-section1">
              {messages['5f_no_489_section_3_jinma_rd_changhua_city_changhu']}
            </p>
          </div>
        </div>
        <p className="footer-copyright-statement">
          <span className="brand-text">
            {messages['2024_corlee__co_all_rights_reserved']}
          </span>
          <a
            href="https://www.allbirds.com/pages/allbirds-terms-of-use"
            className="link-underline-white"
          >
            {messages['terms']}
          </a>
          <span className="brand-text">, </span>
          <a
            href="https://www.allbirds.com/pages/privacy-policy"
            className="link-underline-white"
          >
            {messages['privacy']}
          </a>
          <span className="brand-text"> &amp; </span>
          <a
            href="https://www.allbirds.com/pages/accessibility"
            className="link-underline-white"
          >
            {messages['accessibility']}
          </a>
        </p>
      </div>
    </div>
  )
}

export default BottomBar
