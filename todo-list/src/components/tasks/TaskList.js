import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import TaskForm from './TaskForm';
import Task from './Task';

const TaskList = ({projectId}) => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const taskList = async () => {
      const tasksRes = await Axios.get(`http://localhost:5000/tasks/retrieve/${projectId}`);
      setTasks(tasksRes.data);
    }

    taskList();
  }, [tasks])

  return (
    <div>
      <h4>To Do</h4>
      {tasks
        .filter((task) => !task.completed)
        .map((task, i) => (
          <Task
            key={i}
            text={task.taskName}
            taskId={task._id}
            completed={task.completed}
          />
        ))}
      <h4>Done</h4>
      {tasks
        .filter((task) => task.completed)
        .map((task, i) => (
          <Task
            key={i}
            text={task.taskName}
            taskId={task._id}
            completed={task.completed}
          />
        ))}
      <TaskForm projectId={projectId} />
    </div>
  );
}

export default TaskList;
