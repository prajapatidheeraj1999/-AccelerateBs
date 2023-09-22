import React, { useEffect, useState } from 'react';
import { useTimeTracking } from '../context/TimeTrackingContext';


const TaskList = ({projectname}) => {
  const { state } = useTimeTracking();
  let [data,setdata]=useState([])

console.log(state)
  useEffect(()=>{
    let maindata=state.tasks.filter((el)=>el.project==projectname)
    setdata(maindata)
    // setdata()

  },[state])

  return (
    <div>
      <h2>Task List</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",backgroundColor:"#f0f0f0",gap:"10px"}}>
        {data.length==0?<h1>there is no task in this project</h1>:data.map((project, index) => (
          <div  key={index} style={{backgroundColor:"green",color:'white',padding:"20px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:"5px"}}>
            <p>Task : {project.name}</p>
          <p>Time_Duration : {project.hours}</p>
          <p>Discription : {project.description}</p>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default TaskList;