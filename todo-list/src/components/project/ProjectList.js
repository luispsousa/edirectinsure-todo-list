import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import Project from './Project';
import ProjectForm from './ProjectForm';
import TaskList from '../tasks/TaskList';
import UserContext from '../../context/UserContext';

import './ProjectList.css';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  const user = useContext(UserContext);

  useEffect(() => {
    const projectList = async () => {
      const token = localStorage.getItem("auth-token");
      const projectsRes = await Axios.post(
        "http://localhost:5000/projects/retrieve",
        {userId: user.userData.user.id},
        { headers: { "x-auth-token": token }}
      );
      setProjects(projectsRes.data);
    }

    projectList();
  }, [projects]);

  return (
    <div>
      <ProjectForm />
      <div className="project__container">
        {projects.map((project, i) => (
          <Project 
            key={i} 
            title={project.projectName}
            projectId={project._id}
          >
            <TaskList projectId={project._id} />
          </Project>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
