import React from 'react'
import './style.css'

type Props = {
  placeholder: React.InputHTMLAttributes<HTMLInputElement>['placeholder']
  type: React.InputHTMLAttributes<HTMLInputElement>['type']
  divStyle?: React.HTMLAttributes<HTMLDivElement>['style']
  inputStyle?: React.HTMLAttributes<HTMLInputElement>['style']
}

const InputWidget = (props: Props) => {
  return (
    <div className="center-box" style={props.divStyle}>
      {/* Input Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <input
        placeholder={props.placeholder}
        style={props.inputStyle}
        type={props.placeholder}
        className="input-field-container input-style-f62::placeholder"
      />
    </div>
  )
}

export default InputWidget
