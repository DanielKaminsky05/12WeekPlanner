import React, {useState} from 'react'
import "./colorsInput.css"
export default function ColorsInput(props) {
  const colors= ["#4A90E2", "#7ED321", "#FF6F61", "#40E0D0", "#B39DDB", "#FFD700", "#F5A9B8", "#008080"]
  const [selectedColour, setSelectedColour] = useState(0);
  function changeSelectedColour(colour) {
    
    console.log("test")
    const index = colors.findIndex(color => color == colour);
    props.setSelectedColour(index);
  }
  return (
    <div className = 'colorsInputContainer'>
      <p className='colorsInputHeader'>Select a color</p>
    <div className='colorsInputFlexContainer'>
        {colors.map((color, index) => <div style = {{backgroundColor: color, borderColor: index == props.selectedColour ? 'red': 'black'}} className = 'colorsInput' type='checkbox' key = {color} selected = {index == selectedColour ? true : false} value = {color} onClick={() => changeSelectedColour(color)}/>)}
    </div>
      
    </div>
  )
}
