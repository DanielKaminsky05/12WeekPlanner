import React, {useState} from 'react'
import "./colorsInput.css"
export default function ColorsInput(props) {
  const colors= ["#4A90E2", "#7ED321", "#FF6F61", "#40E0D0", "#B39DDB", "#FFD700", "#F5A9B8", "#008080"]
  function changeSelectedColour(index) {
    
  
    props.setFormData((prevData) => ({

            ...prevData,
            selectedColour: colors[index]
    }))
  }
  return (
    <div className = 'colorsInputContainer'>
      <p className='colorsInputHeader'>Select a color</p>
    <div className='colorsInputFlexContainer'>
        {colors.map((color, index) => (
          <div
            style={{ backgroundColor: color }}
            className={`colorsInput ${props.formData.selectedColour == colors[index] ? 'colorsSelected' : ''}`}
            type='checkbox'
            key={color}
            value={index}
            name='selectedColour'
            onClick={() => changeSelectedColour(index)}
          />
        ))}
    </div>
      
    </div>
  )
}
