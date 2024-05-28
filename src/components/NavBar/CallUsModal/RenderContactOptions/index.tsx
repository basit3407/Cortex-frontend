import ContactCard from '../ContactCard'
import './style.css'
import React from 'react'

function RenderContactOptions({ contactOptionsWithSvgIcons }) {
  return (
    <div className="contact-info-container2">
      {contactOptionsWithSvgIcons.map((data, index) => {
        return <ContactCard {...data} key={index} />
      })}
    </div>
  )
}

export default RenderContactOptions
