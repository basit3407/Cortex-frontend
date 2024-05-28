import SvgIcon1 from './icons/SvgIcon1'
import './style.css'
import messages from './messages.json'
import React from 'react'

function FabricExplorer() {
  return (
    <div className="material-container">
      <div className="material-section">
        <p className="material-title">{messages['material']}</p>
        {/* Button Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        <button className="material-button">
          {messages['explore_more']}
          <SvgIcon1 className="svg-container5" />
        </button>
      </div>
    </div>
  )
}

export default FabricExplorer
