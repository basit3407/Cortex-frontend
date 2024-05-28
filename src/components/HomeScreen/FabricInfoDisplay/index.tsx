import './style.css'
import messages from './messages.json'
import React from 'react'

function FabricInfoDisplay() {
  return (
    <div className="fashion-text-container">
      <div className="global-fashion-styles-container">
        <p className="fashion-statement-bold">
          {messages['explore_cuttingedge_fabrics_redefining_global_fash']}
        </p>
        <p className="global-fashion-text-block">
          {messages['lrem_ipsum_suledes_plankning_till_heterossade_tosn']}
        </p>
      </div>
    </div>
  )
}

export default FabricInfoDisplay
