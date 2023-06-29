import React, { createContext, useState } from 'react';

export const FinishedTasksContext = createContext();

export function FinishedTasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  return (
    <FinishedTasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </FinishedTasksContext.Provider>
  );
}