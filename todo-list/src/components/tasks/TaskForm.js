import React, { useState } from 'react'
import Axios from 'axios';

const TaskForm = ({projectId}) => {
  const [taskName, setTaskName] = useState('');

  const handleChange = (e) => {
    setTaskName(e.target.value);
  }

  const createTask = async (e) => {
    e.preventDefault();
    const task = { completed: false, taskName: taskName, projectId: projectId}
    try {
      await Axios.post("http://localhost:5000/tasks/create", task);
    } catch(err) {
      console.log(err);
    }
    setTaskName('');
  }

  return (
    <form>
      <input value={taskName} onChange={handleChange} placeholder="Task" />
      <input onClick={createTask} type="submit" value="Add" />
    </form>
  );
}

export default TaskForm;