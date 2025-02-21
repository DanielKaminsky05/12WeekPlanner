import React, { useState } from 'react'
import SideNavBar from './sideNavBar/SideNavBar'
import Calendar from './Calendar/Calendar'
import Head from "./Head/Head"
import AddToDo from './AddToDo/AddToDo'
import EditToDo from "./AddToDo/EditToDo"
import task1 from './../testDatabase2'
export default function HomePage() {
  const [addVisible, setAddVisible] = useState(false);
  const [editMode, setEditMode] = useState(false)
  const [editTarget, setEditTarget] = useState(-1)
  const [deleteMode, setDeleteMode] = useState(false)
  const [tasks, setTasks] = useState(task1);
  return (
    <div>   
    {addVisible ? <AddToDo setAddVisible = {setAddVisible} addVisible = {addVisible} setTasks = {setTasks}  tasks = {tasks}/> : ""}
    {editTarget != -1 && editMode? <EditToDo editTarget={editTarget} setEditTarget={setEditTarget} editMode = {editMode} setEditMode = {setEditMode} setTasks = {setTasks} tasks = {tasks}/> : ''}

      <Head/>
      <SideNavBar setAddVisible = {setAddVisible} addVisible = {addVisible} editMode = {editMode} setEditMode={setEditMode} deleteMode={deleteMode} setDeleteMode={setDeleteMode}/>
      <Calendar editTarget = {editTarget} setEditTarget = {setEditTarget} editMode = {editMode} deleteMode={deleteMode} tasks = {tasks} setTasks={setTasks}/>
     
   

    </div>
  )
}
