import React from 'react'
import RenderContactOptions from './RenderContactOptions'
import './style.css'
import messages from './messages.json'

function CallUsModal({ contactOptionsWithSvgIcons, onClose }) {
  return (
    <div className="contact-section_modal">
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <div className="contact-info-container1">
        <div className="message-box">
          <p className="heading-text-bold-uppercase-black">
            {messages['call_us']}
          </p>
          <p className="message-box1">{messages['we_just_one_message_away']}</p>
        </div>
      </div>
      <RenderContactOptions
        contactOptionsWithSvgIcons={contactOptionsWithSvgIcons}
      />
      <p className="contact-section-title">{messages['need_help']}</p>
      <p className="contact-link-text-style">{messages['contact_us']}</p>
    </div>
  )
}

export default CallUsModal
