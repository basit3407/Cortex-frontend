import React from 'react'
import './style.css'

type Props = {
  title: string
  onClick: () => void
  isLoading?: boolean
  isDisabled?: boolean
  error?: string
  style?: React.CSSProperties
}

const Button = (props: Props) => {
  return (
    <div>
      <button
        style={props.style}
        className="button-style"
        disabled={props.isDisabled || props.isLoading}
        onClick={props.onClick}
      >
        {props.title}
      </button>
      {props.error && <p className="error">{props.error}</p>}
    </div>
  )
}

export default Button
