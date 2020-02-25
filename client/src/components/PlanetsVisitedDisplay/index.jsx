import React from 'react'
import './style.css'
import { Planet } from '../Planet'

const PlanetsVisitedDisplay = ({ entries }) => {
  return (
    <div className="list">
      {entries.map((entry, index) => {
        return (
          <Planet
            name={entry.planetName}
            dateVisited={entry.dateVisited}
            key={index}
          ></Planet>
        )
      })}
    </div>
  )
}

export { PlanetsVisitedDisplay }
