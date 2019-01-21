import React from 'react'

import { connect } from 'mini-lake'

const Counter = ({ counter, addToCounter }) => {
  return (
    <div>
      <p>{counter}</p>
      <button onClick={addToCounter}>Add</button>
    </div>
  )
}

export default connect(Counter)
