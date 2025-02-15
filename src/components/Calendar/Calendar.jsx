import React from 'react'
import './calendar.css'
import DayColumn from './DayColumn'
import database from '../testDatabase2';
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
export default function Calendar() {
  const today = new Date();
  const dates = [];
  const tasks = database;

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date);
  }


  
  
  return (
    <div className='calendar'>
      {dates.map((date, index) => {
        const tasksDay = []; // Initialize tasksDay for each date
        tasks.forEach((task) => {
          if (task.days && task.days[days[date.getDay()]] === true) {
            tasksDay.push(task);
          }
        });
  
        return (
          <DayColumn key={index} day={days[date.getDay()]} date={date} tasks={tasksDay} />
        );
      })}
    </div>
  );
  
  
}
