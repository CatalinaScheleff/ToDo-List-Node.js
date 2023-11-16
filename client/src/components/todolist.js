//todo-list-node.js/client/src/components/todolist.js

// Import the useState and useEffect hooks from React
import React, { useEffect, useState } from "react";
import { getTasks, addTask, deleteTask } from "../api";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(1);

  // Call the getTasks function to fetch tasks from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTasks();

        setTasks(data);
        setNextId(
          data.length > 0 ? Math.max(...data.map((task) => task.id)) + 1 : 1
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    const textInput = document.getElementById("newText");
    const textInputValue = textInput.value.trim();

    if (!textInputValue) {
      return;
    }

    const newTask = {
      id: nextId,
      text: textInputValue,
    };

    // Call the addTask function to add a new task to the server
    await addTask(newTask);

    try {
      setTasks([...tasks, newTask]);
      setNextId(nextId + 1);
      textInput.value = "";
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (taskId) => {
    const filteredTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });
    deleteTask(taskId);
    setTasks(filteredTasks);
  };

  // const handleEdit = (taskId) => {

  // }

  return (
    <div className="justify-content-center d-flex">
      <div className="col-6">
        <h1 className="mt-5">Add a Task</h1>
        <input type="text" id="newText" className="form-control my-4" />
        <button onClick={handleSubmit}>Add Task</button>
        <h1 className="mt-5"> Your Tasks ({tasks.length})</h1>
        <ul className="list-group">
          {tasks.map((task, index) => (
            <div>
              <h4>{index + 1}</h4>
              <li key={task.id} className="list-group-item">
                {task.text}
                <button onClick={() => handleDelete(task.id)}>X</button>
                {/* <button onClick={() => handleEdit(task.id)}>Edit</button> */}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;

// const newTask = () => {
//   if (textInput !== " ") {
//     return {
//       id: nextId,
//       text: textInput,
//     };
//   }
// };
