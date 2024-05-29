import './style.css'
import React from 'react'

function StylishContentBox() {
  return (
    <div className="center-aligned-text-container">
      <p className="subtle-text">or</p>
      <div className="inner-divider-line" />
      <div className="nested-content-container">
        <div className="border-box-full-width-separator" />
      </div>
    </div>
  )
}

export default StylishContentBox
