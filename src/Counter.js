import React from 'react'

import { connect } from 'mini-lake'

const Counter = ({ counter, addToCounter, setCounter }) => {
  const setTo100 = () => {
    setCounter(100)
  }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={addToCounter}>Add</button>
      <button onClick={setTo100}>Set to 100</button>
    </div>
  )
}

export default connect(Counter)
