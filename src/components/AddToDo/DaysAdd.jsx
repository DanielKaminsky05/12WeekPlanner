import React, { useState } from "react";
import "./daysAdd.css";

export default function DaysAdd() {
  const [checkedStates, setCheckedStates] = useState({
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
    Sun: false,
  });

  const handleCheckboxClick = (day) => {
    setCheckedStates((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  return (
    <div>
      <p className="daysAddPHeading">On Which Days?</p>
      <div className="daysAddContainer">
        {Object.keys(checkedStates).map((day) => (
          <div key={day} className="daysAddInputContainer">
            <input
              type="checkbox"
              value={day}
              className={`daysAddInput ${
                checkedStates[day] ? "daysAddInputClicked" : ""
              }`}
              onClick={() => handleCheckboxClick(day)}
            />
            <p className="daysAddLabel">{day.charAt(0)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
