import React, { useEffect, useState } from 'react'
import Axios from 'axios';

const Task = ({ text, completed, taskId }) => {
  const [checked, setChecked] = useState(completed);
  
  useEffect(() => {
    const taskDone = async () => {
      await Axios.put(`http://localhost:5000/tasks/status/${taskId}`, checked);
    };

    taskDone();
  }, [checked])

  const deleteTask = async () => {
    await Axios.delete(`http://localhost:5000/tasks/delete/${taskId}`);
  }
  
  const handleChange = (e) => {
    setChecked(e.target.checked);
  }

  

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <input type="checkbox" onChange={(e) => handleChange(e)} checked={checked} />
      <p style={{ marginLeft: ".5rem" }}>{text}</p>
      {!completed && (
        <button
          style={{ color: "red", marginLeft: ".5rem" }}
          onClick={deleteTask}
        >
          X
        </button>
      )}
    </div>
  );
};

export default Task
