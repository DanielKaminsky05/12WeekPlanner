import React from 'react'
import TopNavBar from './TopNavBar'
import "./head.css"
import WeekTracker from './WeekTracker'
export default function Head(props) {
  return (
    <div className='headContainer'>
    <div className='head'>
      <TopNavBar/>
      <WeekTracker week = {props.week} setWeek={props.setWeek}/>
    </div>
      
    </div>
  )
}
