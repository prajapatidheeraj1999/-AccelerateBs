// TimeTrackingContext.js

import React, { createContext, useReducer, useContext } from 'react';

const TimeTrackingContext = createContext();

const initialState = {
  projects: [],
  tasks: [],
  totalHours: 0,
};

const ADD_PROJECT = 'ADD_PROJECT';
const ADD_TASK = 'ADD_TASK';

const timeTrackingReducer = (state, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case ADD_TASK:
      const updatedTasks = [...state.tasks, action.payload];
      const totalHours = updatedTasks.reduce((acc, task) => acc + task.hours, 0);
      return {
        ...state,
        tasks: updatedTasks,
        totalHours,
      };
    default:
      return state;
  }
};

export const TimeTrackingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(timeTrackingReducer, initialState);

  return (
    <TimeTrackingContext.Provider value={{ state, dispatch }}>
      {children}
    </TimeTrackingContext.Provider>
  );
};

export const useTimeTracking = () => {
  return useContext(TimeTrackingContext);
};
