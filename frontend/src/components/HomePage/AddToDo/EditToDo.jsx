import React, {useEffect, useState } from "react";
import "./addToDo.css";
import Cancel from "./Cancel";
import DaysAdd from "./DaysAdd";
import Switch from "./Switch";
import WeekRange from "./WeekRange";
import ColorsInput from "./ColorsInput";

export default function AddToDo(props) {

  function testSubmit(event) {

    event.preventDefault();
    const index = props.tasks.findIndex(task => task.id == props.editTarget);
    props.tasks[index] = formData
    props.setTasks(props.tasks)
    
    props.setEditMode(false)
    props.setEditTarget(-1)
  }

  const [formData, setFormData] = useState({
    toDo: '',
    days: {
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
    Sun: false, 
  },
    selectedColour: '#4A90E2',
    recurring: false,
    weeks: '',
    id: 0

  })
  

  useEffect(() => {
    const task = props.tasks.find(task => task.id == props.editTarget)
    setFormData(task)
  }, [])

  function handleInputChange(event) {
    const {name, value} = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))

  }


  return (
    <div className="addToDo">
      <div draggable="true" className="addToDoBox">
        <Cancel
          setAddVisible={props.setEditMode}
          addVisible={props.editMode}
          editTarget = {props.editTarget}
          setEditTarget = {props.setEditTarget}
        />
        <h3 className="addToDoHeader">Add an item</h3>
        <form className="addToDoGridContainer" onSubmit={testSubmit}>
          <div>
            <textarea
              className="addToDoTextArea"
              placeholder="What needs to be done?"
              name = 'toDo'
              value={formData.toDo}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <DaysAdd formData = {formData} setFormData={setFormData}/>
            <div className="addToDoRFlexContainer">
              <div className="addToDoRContainer">
                <p className="addToDoRHeading">Recurring?</p>
                <Switch setFormData = {setFormData} formData = {formData} />
              </div>
              {formData.recurring ? <WeekRange /> : ""}
            </div>
          </div>

          <div className="addToDoBottomContainer">
            <ColorsInput formData = {formData} setFormData={setFormData}/>
            
            <button type = 'submit' className="addToDoSubmitButton">Add Task</button>

          </div>
        </form>
      </div>
    </div>
  );
}
