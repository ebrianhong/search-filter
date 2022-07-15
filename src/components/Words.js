import React from 'react'
import '../styles/Words.css';

const Words = ({fruits}) => {
  return (
    <div id="words">
      <ul>
        {fruits.map((fruit) => {
          return <li>{fruit}</li>
        })}
      </ul>
    </div>
  )
}

export default Words