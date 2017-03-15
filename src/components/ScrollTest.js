import React from 'react'
import { addSection } from "../actions/actionCreators"
import { List } from 'immutable'

const scrollToSection = (view) => {
  const element = document.querySelector(view)

  element ? document.querySelector(view)
                    .scrollIntoView({ block: 'end',
                                      behavior: 'smooth' })
          : setTimeout(() => {scrollToSection(view)}, 10)
}

const section1 = (props) => {
  return (
    <div id="step-1"
         style={{'backgroundColor': 'red',
                 'height': '600px'}}>
         <div>Step 1</div>
         <button onClick={ (_) => { props.dispatch(addSection())
                                    setTimeout(() => {scrollToSection('#step-2')}, 10)
                         }}>
                 Go to step 2</button>
    </div>
  )
}

const section2 = (props) => {
  return (
    <div id="step-2"
         style={{'backgroundColor': 'green',
                 'height': '600px'}}>
         <div>Step 2</div>
         <button onClick={ (_) => { props.dispatch(addSection())
                                    setTimeout(() => {scrollToSection('#step-3')}, 10)
                         }}>
                 Go to step 3</button>
    </div>
  )
}

const section3 = (props) => {
  return (
    <div id="step-3"
         style={{'backgroundColor': 'blue',
                 'height': '600px'}}>
         <div>Step 3</div>
         <button onClick={ (_) => { props.dispatch(addSection())
                                    setTimeout(() => {scrollToSection('#step-1')}, 10)
                         }}>
                 Go to step 1</button>
    </div>
  )
}

const ScrollTest = (props) => {
  const sections = props.state.getIn(["data", "sections"], List())
  console.log(sections)
  const size = sections.size + 1
  console.log(size)

  return (
    <div>
      { size >= 1 ? section1(props) : null }
      { size >= 2 ? section2(props) : null }
      { size >= 3 ? section3(props) : null }
    </div>
  )
}

export default ScrollTest
