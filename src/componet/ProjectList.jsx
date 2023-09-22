// ProjectList.js

import React from 'react';
import { useTimeTracking } from '../context/TimeTrackingContext';
import { Link } from 'react-router-dom';


const ProjectList = () => {
  const { state } = useTimeTracking();

  return (
    <div style={{marginLeft:"5%"}}>
      <h2>Project List</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(6,1fr)",backgroundColor:"#f0f0f0",gap:"10px"}}>
        {state.projects.map((project, index) => (
         <Link to={`/task/${project}`} key={index} style={{textDecoration:"none"}}><h3 style={{padding:"20px",border:"0px solid red",textDecoration:"none",backgroundColor:"yellowgreen",textAlign:"center",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:"5px",color:"black"}}>{project}</h3></Link> 
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
