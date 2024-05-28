import React from 'react'
import ImageContainer2 from '../ImageContainer2'
import ImageContainer4 from '../ImageContainer4'
import ImageContainer3 from '../ImageContainer3'
import ImageContainer from '../ImageContainer'
import './style.css'
import messages from './messages.json'
import ImageContainer1 from '../ImageContainer1'

function RealizationDisplay() {
  return (
    <div className="realization-container">
      <p className="majestic-heading">{messages['realizations']}</p>
      <div className="realization-container1">
        <div className="image-container-with-text">
          <img
            src="/assets/img_1091_2307_f5dece.jpeg"
            className="hero-image-container"
          />
          <ImageContainer2 />
        </div>
        <div className="nested-content-container">
          <img
            src="/assets/img_1091_2310_c51386.jpeg"
            className="image-container-full-screen1"
          />
          <ImageContainer4 />
        </div>
        <div className="realization-container">
          <img
            src="/assets/img_1091_2313_a511de.jpeg"
            className="profile-image-container"
          />
          <ImageContainer3 />
        </div>
        <div className="image-container-with-text1">
          <img
            src="/assets/img_1091_2316_978f9e.jpeg"
            className="image-container-full-screen"
          />
          <ImageContainer />
        </div>
        <div className="vertical-image-gallery">
          <img
            src="/assets/img_1091_2319_260d62.jpeg"
            className="profile-image-container1"
          />
          <ImageContainer1 />
        </div>
      </div>
    </div>
  )
}

export default RealizationDisplay
