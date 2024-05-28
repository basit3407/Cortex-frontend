import ProductInfoDisplay from '../ProductInfoDisplay'
import './style.css'
import messages from './messages.json'
import React from 'react'

function NewsletterSubscriptionSection() {
  return (
    <div className="newsletter-section">
      <div className="newsletter-subscription-section">
        <ProductInfoDisplay />
        <div className="subscribe-section">
          <p className="newsletter-subscription-text">
            {messages['email_here']}
          </p>
          {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
          <button className="subscribe-button-style">
            {messages['subscribe']}
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsletterSubscriptionSection
