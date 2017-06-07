import React from 'react'

const CellDemo = (props) => {
  const color = props.index % 2 === 0 ? "red" : "blue"
  return (
    <div style={{"color": color}}>{props.user}</div>
  )
}

const TableDemo = (props) => {
  return (
    <div>
      {props.collection.keySeq().map(i => {
        return (
          <CellDemo state={props.state}
                    index={i}
                    user={props.collection.get(i)}/>
        )})}
    </div>
  )
}

export default TableDemo
