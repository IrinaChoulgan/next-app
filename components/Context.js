'use client';

import { createContext, useState, useEffect, useContext } from 'react';

const Context = createContext();

export const useProject = () => useContext(Context);

const ProjectContext = ({ children }) => {
  const [projectInfo, setProjectInfo] = useState(null);

  const updateProjectInfo = (newProjectInfo) => {
    setProjectInfo(newProjectInfo);
    localStorage.setItem('formData', JSON.stringify(newProjectInfo));
  };
  useEffect(() => {
    const value = localStorage.getItem('formData');
    if (!value) return;
    setProjectInfo(JSON.parse(value));
  }, []);

  return <Context.Provider value={{ projectInfo, updateProjectInfo }}>{children}</Context.Provider>;
};

export default ProjectContext;
