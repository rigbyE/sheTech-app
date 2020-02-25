import React from 'react'
import './style.css'

const Milestone = ({ title, description }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export { Milestone }
