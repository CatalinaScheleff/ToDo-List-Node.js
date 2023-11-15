//todo-list-node.js/client/src/components/todolist.js

// Import the useState and useEffect hooks from React
import React, { useEffect, useState } from 'react';


const TodoList = () => {

  const [tasks, setTasks] = useState([])

useEffect(() => {
  // Make a GET request to the server
  fetch("http://localhost:3001/tasks", {
    method: "GET", // Request method
    headers: {
      "Content-Type":"application/json", // Request header
    }
  })
  // Convert the response to JSON format
  .then((response) => response.json())
  .then((data) => {
    // Update the state of the component with the recived tasks
    setTasks(data)
    console.log(data);
  })
  // Catch any errors and log them to the console
  .catch((error) => {
    console.error(error);
  });
},[]);

    return ( 
    <div className='justify-content-center d-flex'>
      <div className="col-6">
      <h1 className='mt-5'>Add a Task</h1>
    <input type="text" className="form-control my-4"/>
    <h1 className='mt-5'> Your Tasks</h1>
      <ul className="list-group">
      {tasks.map((tasks) => (<li key={tasks.id} className="list-group-item">{tasks.text}</li>))}
    </ul>
    </div>
    </div>
    )
}

export default TodoList