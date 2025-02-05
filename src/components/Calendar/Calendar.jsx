import React from 'react'
import './calendar.css'
import DayColumn from './DayColumn'
import database from '../testDatabase';
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
      {dates.map((date, index) => (
        <DayColumn key={index} date={date} tasks = {tasks[index]} />
      ))}
    </div>
  );
  
  
}
