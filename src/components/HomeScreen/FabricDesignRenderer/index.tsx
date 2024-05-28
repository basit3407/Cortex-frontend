import { theme } from '../../../util'
import FabricDesignDisplay from '../FabricDesignDisplay'
import React from 'react'

import './style.css'

function FabricDesignRenderer({ fabricDesignOptions }) {
  const fabricDesignAlignmentStyles = [
    { alignmentPreference: theme.others.ALIGN_SELF_8FD4E705 },
    {
      textAlignmentStyle: theme.others.TEXT_ALIGN_AEB2CC55,
      alignmentPreference: theme.others.ALIGN_SELF_AEB2CC55,
    },
    { alignmentPreference: theme.others.ALIGN_SELF_8FD4E705 },
  ]
  return (
    <div className="fabric-design-description-list">
      {fabricDesignOptions.map((data, index) => {
        return (
          <FabricDesignDisplay
            {...data}
            key={index}
            {...fabricDesignAlignmentStyles[index]}
          />
        )
      })}
    </div>
  )
}

export default FabricDesignRenderer
