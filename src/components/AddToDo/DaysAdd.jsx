import React, { useState } from "react";
import "./daysAdd.css";

export default function DaysAdd(props) {
 

  function handleDayInput(event) {
    const {value} = event.target;
    props.setFormData((prevData) => {
      
      const day = prevData.days[value]
      return {
        ...prevData,
        days: {
          ...prevData.days,
          [value]: !day
        }
      }
    })
  }

  return (
    <div>
      <p className="daysAddPHeading">On Which Days?</p>
      <div className="daysAddContainer">
        {Object.keys(props.formData.days).map((day) => (
          <div key={day} className="daysAddInputContainer">
            <input
              type="checkbox"
              value={day}
              className={`daysAddInput ${
                props.formData.days[day] ? "daysAddInputClicked" : ""
              }`}
              onClick={handleDayInput}
            />
            <p className="daysAddLabel">{day.charAt(0)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
