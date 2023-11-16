//todo-list-node.js/client/src/components/todolist.js

// Import the useState and useEffect hooks from React
import React, { useEffect, useState } from "react";
import { getTasks, addTask, deleteTask, updateTask } from "../api";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState("");

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

  const handleEdit = (taskId) => {
    setEditingTaskId(taskId);
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditedTaskText(taskToEdit.text);
  };

  const handleSaveEdit = async () => {
    // Actualizar localmente
    const updatedTasks = tasks.map((task) =>
      task.id === editingTaskId ? { ...task, text: editedTaskText } : task
    );
    setTasks(updatedTasks);

    // Llamar al backend para actualizar
    await updateTask(editingTaskId, { text: editedTaskText });

    // Limpiar estado de edición
    setEditingTaskId(null);
    setEditedTaskText("");
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setEditedTaskText("");
  };

  return (
    <div className="justify-content-center d-flex">
      <div className="col-6">
        <h1 className="mt-5">Add a Task</h1>
        <input type="text" id="newText" className="form-control my-4" />
        <button onClick={handleSubmit}>Add Task</button>
        <h1 className="mt-5"> Your Tasks ({tasks.length})</h1>
        <ul className="list-group">
          {tasks.map((task, index) => (
            <div key={task.id}>
              <h4>{index + 1}</h4>
              <li className="list-group-item">
                {editingTaskId === task.id ? (
                  <div>
                    <input
                      type="text"
                      value={editedTaskText}
                      onChange={(e) => setEditedTaskText(e.target.value)}
                    />
                    <button onClick={handleSaveEdit}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    {task.text}
                    <button onClick={() => handleEdit(task.id)}>Edit</button>
                    <button onClick={() => handleDelete(task.id)}>X</button>
                  </div>
                )}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
