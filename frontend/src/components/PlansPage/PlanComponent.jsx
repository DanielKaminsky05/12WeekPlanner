import React from 'react'
import "./planComponent.css"
export default function PlanComponent() {
  return (
    <div className='planComponentContainer'>
      <div className='planInfo'>
        <h3 className='planTitle'>Plan #1</h3>
        <p className='planCurrentWeek'>Week 1/12</p>
      </div>

      <div className='planColour' style={{backgroundColor: '#4A90E2'}}>

      </div>
    </div>
  )
}
