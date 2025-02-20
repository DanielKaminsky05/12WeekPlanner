import React, { useState } from 'react'
import './dayColumn.css'
import ToDoCards from './ToDoCards'
import CompletionTracker from './CompletionTracker';

export default function DayColumn(props) {

  const [completed, setCompleted] = useState(0);








  const date = props.date
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const day = date.getDate();
  let suffix = 'th';
  if (day == 1 || day == 21 || day == 31) suffix = 'st';
  else if (day  == 2 || day == 22) suffix = 'nd';
  else if (day == 3 || day == 23) suffix = 'rd';


  

  return (
    
    <div className='dayColumn'>
      <div className='dayColumnHeaderContainer'>
        <p className='weekDay'>{daysOfWeek[date.getDay()]}</p>
        <div className='dayColumnHeaderBottom'>
            <p>{monthsOfYear[date.getMonth()]} {day}{suffix}</p>
            <p><CompletionTracker total = {props.tasksDay.length} completed = {completed}/></p>
        </div>
        
      </div>
      {props.tasksDay.map((task, index) => {
          return <ToDoCards
            key = {index}
            toDo = {task.toDo}
            color = {task.selectedColour}
            completed={completed}
            setCompleted = {setCompleted}
            id = {task.id}
            editTarget = {props.editTarget} 
            setEditTarget = {props.setEditTarget}
            editMode = {props.editMode}
            deleteMode={props.deleteMode}
            setTasks={props.setTasks}
            tasks = {props.tasks}
          />
        
      })}
      
    </div>
  )
}
