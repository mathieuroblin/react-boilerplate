import React from 'react'

const BasicInput = (props) => {
  return (
    <input onChange={props.onChange}
           value={props.value}>
    </input>
  )
}

export default BasicInput
