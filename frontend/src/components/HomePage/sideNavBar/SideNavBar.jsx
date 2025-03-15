import React from "react";
import "./SideNavBar.css"

export default function SideNavBar(props) {
  
  function toggleAdd() {

    const addVisible = props.addVisible;
    props.setAddVisible(!addVisible);
    props.setDeleteMode(false);
    props.setEditMode(false)
    console.log("test1")
    
  }

  function toggleEdit() {
    props.setEditMode(!props.editMode)
    props.setAddVisible(false);
    props.setDeleteMode(false);
  }

  function toggleDelete() {

    props.setDeleteMode(prevValue => !prevValue)
    props.setAddVisible(false);
    props.setEditMode(false);
    console.log(!props.deleteMode)
 
  }


  return (
    <div className="sideNavContainer">
      <div>
        <svg className={`${props.addVisible ? 'selected' : ''} sideNavSVGs`}
          width="30"
          height="30"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            toggleAdd()
          }}
          
        >
          <path
            d="M24 10V38M10 24H38"
           
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            
          />
        </svg>
      </div>
      <div>
        <svg
          
          width="30"
          height="30"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleEdit}
          className={`${props.editMode ? 'selected' : ''} sideNavSVGs`}
        >
          <path
            d="M34 5.99999C34.5253 5.47471 35.1489 5.05803 35.8352 4.77374C36.5215 4.48946 37.2571 4.34314 38 4.34314C38.7429 4.34314 39.4785 4.48946 40.1648 4.77374C40.8511 5.05803 41.4747 5.47471 42 5.99999C42.5253 6.52528 42.942 7.14889 43.2263 7.83521C43.5105 8.52153 43.6569 9.25713 43.6569 9.99999C43.6569 10.7429 43.5105 11.4785 43.2263 12.1648C42.942 12.8511 42.5253 13.4747 42 14L15 41L4 44L7 33L34 5.99999Z"
            
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
           
          />
        </svg>
      </div>
      <div>
        <svg
          width="30"
          height="30"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleDelete}
          className={`${props.deleteMode ? 'selected' : ''} sideNavSVGs deleteSVG`}
          
        >
          <path
            d="M14 42C12.9 42 11.9583 41.6083 11.175 40.825C10.3917 40.0417 10 39.1 10 38V12H8V8H18V6H30V8H40V12H38V38C38 39.1 37.6083 40.0417 36.825 40.825C36.0417 41.6083 35.1 42 34 42H14ZM34 12H14V38H34V12ZM18 34H22V16H18V34ZM26 34H30V16H26V34Z"
          
          />
        </svg>
      </div>
    </div>
  );
}
