// ProjectForm.js

import React, { useState } from 'react';
import { useTimeTracking } from '../context/TimeTrackingContext';
import ProjectList from './ProjectList';
const ADD_PROJECT = 'ADD_PROJECT'

const ProjectForm = () => {
  const { state, dispatch } = useTimeTracking();
  const [projectName, setProjectName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch({type:ADD_PROJECT,payload:projectName})
    setProjectName("")
  };
  console.log(state)

  return (
    <>
   
    <div style={{textAlign:"center"}}>
      <h2>Create a Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Create Project"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          style={{padding:"10px 20px",border:"1px solid black", marginRight:"5px",borderRadius:"5px"}}

        />
        <button type="submit" style={{padding:"10px 20px",borderRadius:"5px"}}>Add Project</button>
      </form>
    </div>
     <ProjectList/>
     </>
  );
};

export default ProjectForm;
