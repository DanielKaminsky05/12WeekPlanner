import React from 'react'
import SideNavBar from './SideNavBar'
import Calendar from './Calendar/Calendar'
import Head from "./Head/Head"
import AddToDo from './AddToDo'
export default function App() {
  return (
    <div>   
 
      <Head/>
      <SideNavBar/>
      <Calendar/>
      <AddToDo/>
   

    </div>
  )
}
