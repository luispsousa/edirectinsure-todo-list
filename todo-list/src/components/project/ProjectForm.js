import React, { useState, useContext } from 'react'
import Axios from 'axios';
import UserContext from '../../context/UserContext';

import './ProjectForm.css';

const ProjectForm = () => {
  const [projectTitle, setProjectTitle] = useState('');

  const user = useContext(UserContext);
  const handleChange = (e) => {
    setProjectTitle(e.target.value);
  };

  const createProject = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("auth-token");
    const project = { projectName: projectTitle, userId: user.userData.user.id };
    try {
      await Axios.post("http://localhost:5000/projects/create/", project, {
        headers: {
          "x-auth-token": token,
        },
      });
    } catch (err) {
      console.log(err);
    }
    setProjectTitle('');
  }; 

  return (
    <form className="project__form">
      <label htmlFor="create-project">Create a new project</label>
      <input 
        id="create-project" 
        value={projectTitle} 
        onChange={handleChange} 
        placeholder="Project name"
      />
      <input onClick={createProject} type="submit" value="Create Project" />
    </form>
  );
}

export default ProjectForm;
