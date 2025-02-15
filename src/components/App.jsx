import React, { useState } from 'react'
import SideNavBar from './SideNavBar'
import Calendar from './Calendar/Calendar'
import Head from "./Head/Head"
import AddToDo from './AddToDo/AddToDo'
export default function App() {
  const [addVisible, setAddVisible] = useState(false);

  return (
    <div>   
    {addVisible ? <AddToDo setAddVisible = {setAddVisible} addVisible = {addVisible}/> : ""}
      
      <Head/>
      <SideNavBar setAddVisible = {setAddVisible} addVisible = {addVisible}/>
      <Calendar/>
     
   

    </div>
  )
}
