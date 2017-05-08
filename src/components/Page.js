import React from 'react'
import { List } from 'immutable'

import PrimaryButton from './PrimaryButton'
import BasicInput from './BasicInput'
import TableDemo from './TableDemo'

import { editInputIn, addUser } from '../actions/actionCreators'

const Page = (props) => {
  const valueInput = props.state.getIn(["username"], "")
  const users = props.state.getIn(["users"], List())
  
  return (
    <div>
      <div>Hello world!</div>
      <BasicInput state={props.state}
                  value={valueInput}
                  onChange={ (event) => {
                    props.dispatch(editInputIn(["username"],
                                               event.target.value))
                  }}/>
      <PrimaryButton state={props.state}
                     label='Add user'
                     onClick={ (event) => {
                       props.dispatch(addUser(["users"],
                                              valueInput))
                     }}/>
      <TableDemo state={props.state}
                 collection={users}/>
    </div>
  )
}

export default Page
