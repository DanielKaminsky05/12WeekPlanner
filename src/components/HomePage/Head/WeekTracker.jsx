import React from "react";
import "./weekTracker.css"

export default function WeekTracker() {
  return (
    <div className="weekTracker">
      <div className="weekContainer">
        <svg
          className="leftWeekArrow"
          
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 20L20 30M20 30L30 40M20 30L40 30M30 55C16.1929 55 5 43.8071 5 30C5 16.1929 16.1929 5 30 5C43.8071 5 55 16.1929 55 30C55 43.8071 43.8071 55 30 55Z"
            stroke="#1E1E1E"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2>Week 1/12</h2>
        <div className="weekProgress">
            <div className="weekProgressColour"></div>
        </div>
        <svg
          className="rightWeekArrow"
        
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 20L20 30M20 30L30 40M20 30L40 30M30 55C16.1929 55 5 43.8071 5 30C5 16.1929 16.1929 5 30 5C43.8071 5 55 16.1929 55 30C55 43.8071 43.8071 55 30 55Z"
            stroke="#1E1E1E"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <hr></hr>
    </div>
  );
}
