import React, { useState } from "react";
import "./addToDo.css";
import Cancel from "./Cancel";
import DaysAdd from "./DaysAdd";
import Switch from "./Switch";
import WeekRange from "./WeekRange";
import ColorsInput from "./ColorsInput";
export default function AddToDo(props) {

  function testSubmit(event) {

    console.log(event)
    event.preventDefault();
  }





  const [reaccuring, setReaccuring] = useState(false);
  const [selectedColour, setSelectedColour] = useState(0);
  return (
    <div className="addToDo">
      <div draggable="true" className="addToDoBox">
        <Cancel
          setAddVisible={props.setAddVisible}
          addVisible={props.addVisible}
        />
        <h3 className="addToDoHeader">Add an item</h3>
        <form className="addToDoGridContainer" onSubmit={testSubmit}>
          <div>
            <textarea
              className="addToDoTextArea"
              placeholder="What needs to be done?"
            />
          </div>

          <div>
            <DaysAdd />
            <div className="addToDoRFlexContainer">
              <div className="addToDoRContainer">
                <p className="addToDoRHeading">Reaccuring?</p>
                <Switch reaccuring={reaccuring} setReaccuring={setReaccuring} />
              </div>
              {reaccuring ? <WeekRange /> : ""}
            </div>
          </div>

          <div className="addToDoBottomContainer">
            <ColorsInput selectedColour = {selectedColour} setSelectedColour = {setSelectedColour}/>
            
            <button type = 'submit' className="addToDoSubmitButton">Add Task</button>

          </div>
        </form>
      </div>
    </div>
  );
}
