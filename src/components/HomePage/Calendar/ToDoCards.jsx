import React, { useState } from 'react'
import "./toDoCards.css"
import tasks from '../../testDatabase2';
export default function ToDoCards(props) {
 const  [clicked, setClicked] = useState(false);


 function checkEdit() {
    if (props.editMode) {
      props.setEditTarget(props.id)
         
    }
    else if (props.deleteMode == true) {
      const updatedTasks = props.tasks.filter(task => task.id != props.id);
      props.setTasks(updatedTasks)
      console.log(updatedTasks)
    
      
    }
    
 }


  function toggleClick() {
    if (clicked) {
      setClicked(false);
      props.setCompleted(props.completed - 1);
    }
    else {
      setClicked(true);
      props.setCompleted(props.completed + 1);
    }
  }

  

  return (
    <div className={`toDoCards ${clicked ? 'clicked' : ''}`} style={{backgroundColor: props.color}} onClick={checkEdit
    }>
        <div className='toDoComplete' onClick={toggleClick} >
        {clicked && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 13l4 4L19 7"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        </div>
        <div className='toDoContent' ><p className='toDoTask' >{props.toDo}</p>
        
        
        
        </div>
      </div>

  )
}
