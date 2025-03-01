import React, { useEffect, useState } from 'react'
import './calendar.css'
import DayColumn from './DayColumn'
import WeekTracker from '../Head/WeekTracker';
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function Calendar(props) {
  const today = new Date();
  const dates = [];
  

  
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i + 7 * (props.week-1));
    dates.push(date);
  }


  
  
  return (
    <div>

    
   
    <div className='calendar'>
      {dates.map((date, index) => {
        const tasksDay = []; // Initialize tasksDay for each date
        props.tasks.forEach((task) => {
          if (task.days && task.days[days[date.getDay()]] === true) {
            tasksDay.push(task);
          }
        });
  
        return (
          <DayColumn key={index} 
          day={days[date.getDay()]} 
          date={date} tasksDay={tasksDay} 
          editTarget = {props.editTarget} 
          setEditTarget = {props.setEditTarget} 
          editMode = {props.editMode} 
          deleteMode={props.deleteMode}
          setTasks={props.setTasks}
          tasks = {props.tasks}
          />
         
        );
      })}
    </div>
    </div>
  );
  
  
}
