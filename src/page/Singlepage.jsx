import React from 'react'
import TaskForm from '../componet/TaskForm'
import { useParams } from 'react-router-dom'
import TaskList from '../componet/TaskList'

const Singlepage = () => {
   let {projectname}= useParams()
   console.log(projectname)
  return (
    <div style={{marginLeft:"20px"}}>
        <h2>Project Name : {projectname}</h2>
        <TaskForm projectname={projectname}/>
        <TaskList  projectname={projectname}/>
    </div>
  )
}

export default Singlepage