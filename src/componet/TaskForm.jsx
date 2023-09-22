// TaskForm.js

import React, { useState } from 'react';
import { useTimeTracking } from '../context/TimeTrackingContext';
import "../style/taskfrom.css"
const ADD_PROJECT = 'ADD_PROJECT';
const ADD_TASK = 'ADD_TASK';
const TaskForm = ({projectname}) => {
  const { state, dispatch } = useTimeTracking();
  const [taskName, setTaskName] = useState('');
  const [hours, setHours] = useState('');
  const [description, setDescription] = useState('');
  // const [selectedProject, setSelectedProject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch an action to add the task to the context state
    dispatch({
      type: ADD_TASK,
      payload: {
        project:projectname,
        name: taskName,
        hours: parseFloat(hours),
        description,
      },
    });
    // Clear form fields
    console.log(taskName,hours,description,projectname)
    setTaskName('');
    setHours('');
    setDescription('');
  };

  return (
    <div>
      <h2>Create a Task</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for task name, hours, description, and project selection */}
        {/* Add select options for projects */}
        <input type="text" placeholder='Task_Name' value={taskName} onChange={(el)=>setTaskName(el.target.value)} />
        <input type="text" placeholder='Task_Duration' value={hours} onChange={(el)=>setHours(+el.target.value)}/>
        <input type="text" placeholder='Discription' value={description} onChange={(el)=>setDescription(el.target.value)}/>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
