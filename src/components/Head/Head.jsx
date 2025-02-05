import React from 'react'
import TopNavBar from './TopNavBar'
import WeekTracker from './WeekTracker'
import "./head.css"
export default function Head() {
  return (
    <div className='headContainer'>
    <div className='head'>
      <TopNavBar/>
      <WeekTracker/>
    </div>
      
    </div>
  )
}
