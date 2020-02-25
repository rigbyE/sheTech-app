import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import './index.css'

import { Carousel } from './components/Carousel'
import { MilestoneDisplay } from './components/MilestoneDisplay'
import { PlanetsVisitedDisplay } from './components/PlanetsVisitedDisplay'

function MilestoneList() {
  const [milestones, setMilestones] = useState([])

  useEffect(() => {
    const getMilestones = async () => {
      try {
        const res = await axios.get('http://localhost:8000/milestones')
        setMilestones(res.data)
      } catch (e) {
        console.error(e)
      }
    }
    getMilestones()
  }, [])

  return <MilestoneDisplay entries={milestones}></MilestoneDisplay>
}

function PlanetsVisitedList() {
  const [planetsVisited, setPlanetsVisited] = useState([])

  useEffect(() => {
    const getPlanetsVisited = async () => {
      try {
        const res = await axios.get('http://localhost:8000/planets-visited')
        setPlanetsVisited(res.data)
      } catch (e) {
        console.error(e)
      }
    }
    getPlanetsVisited()
  }, [])

  return (
    <PlanetsVisitedDisplay entries={planetsVisited}></PlanetsVisitedDisplay>
  )
}

class Page extends React.Component {
  render() {
    return (
      <div>
        <Carousel />
        <div style={{ display: 'flex' }}>
          <MilestoneList></MilestoneList>
          <PlanetsVisitedList></PlanetsVisitedList>
        </div>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(<Page />, document.getElementById('root'))
