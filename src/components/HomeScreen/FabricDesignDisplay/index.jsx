import React from 'react'
import './style.css'

function FabricDesignDisplay({
  fabricDesignCategory,
  fabricCraftingDescription,
  alignmentPreference,
  textAlignmentStyle,
}) {
  return (
    <div className="fabric-design-section">
      <p className="art-noova-title" style={{ textAlign: textAlignmentStyle }}>
        {fabricDesignCategory}
      </p>
      <p
        className="fabric-crafting-description-style"
        style={{ alignSelf: alignmentPreference }}
      >
        {fabricCraftingDescription}
      </p>
    </div>
  )
}

export default FabricDesignDisplay
