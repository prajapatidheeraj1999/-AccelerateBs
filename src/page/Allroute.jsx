
import React from 'react'
import {Routes,Route} from "react-router-dom"
import ProjectForm from '../componet/ProjectForm'
import Singlepage from './Singlepage'
const Allroute = () => {
  return (
    <Routes>
        <Route path='/' element={<ProjectForm/>}/>
        <Route path='/task/:projectname' element={<Singlepage/>}/>
    </Routes>
  )
}

export default Allroute