import React from 'react'

import '../styles/Input.css';

const Input = ({filterWord}) => {
  return (
    <div id="input-container">
      <p>Enter Word:</p>
      <input onChange={(e) => filterWord(e)}></input>
    </div>
  )
}

export default Input;