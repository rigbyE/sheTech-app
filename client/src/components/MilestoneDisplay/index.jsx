import React from 'react'
import './style.css'
import { Milestone } from '../Milestone'

const MilestoneDisplay = ({ entries }) => {
  return (
    <div className="list">
      {entries.map((entry, index) => {
        return (
          <Milestone
            title={entry.title}
            description={entry.description}
            key={index}
          ></Milestone>
        )
      })}
    </div>
  )
}

export { MilestoneDisplay }
