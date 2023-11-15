//todo-list-node.js/client/src/components/todolist.js

// Import the useState and useEffect hooks from React
import React, { useEffect, useState } from "react";
import { getTasks, addTask } from "../api";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Call the getTasks function to fetch tasks from the server
    getTasks()
      .then((data) => {
        setTasks(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = () => {
    const textInput = document.getElementById("newText").value;

    const newTask = {
      id: tasks.length + 1,
      text: textInput,
    };
    // Call the addTask function to add a new task to the server
    addTask(newTask)
      .then((addedTask) => {
        setTasks([...tasks, addedTask]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="justify-content-center d-flex">
      <div className="col-6">
        <h1 className="mt-5">Add a Task</h1>
        <input type="text" id="newText" className="form-control my-4" />
        <button onClick={handleSubmit}>Add Task</button>
        <h1 className="mt-5"> Your Tasks</h1>
        <ul className="list-group">
          {tasks.map((task) => (
            <li key={task.id} className="list-group-item">
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
