import React from 'react'
import './style.css'

const Planet = ({ name, dateVisited }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <p>{dateVisited}</p>
    </div>
  )
}

export { Planet }
