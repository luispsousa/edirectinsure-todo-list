import React from 'react'
import Axios from 'axios';

import './Project.css';

const Project = ({title, projectId, children}) => {
  const deleteProject = async () => {
    await Axios.delete(`http://localhost:5000/projects/delete/${projectId}`);
  }

  const changeName = async () => {
    let newProjectName = prompt("New project name", "");
    await Axios.put(`http://localhost:5000/projects/changeName/${projectId}`, {
      projectName: newProjectName,
    });
  }
  
  return (
    <div className="project">
      <div className="project__header">
        <h2>{title}</h2>
        <button onClick={changeName}>edit</button>
        <button onClick={deleteProject}>X</button>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Project;
