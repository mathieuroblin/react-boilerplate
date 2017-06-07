import React from 'react'

const PrimaryButton = (props) => {
  return (
    <button onClick={props.onClick}>
            {props.label}
    </button>
  )
}

export default PrimaryButton
