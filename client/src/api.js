// todo-list-node.js/client/src/api.js

const apiUrl = "http://localhost:3001/tasks";

export const getTasks = () => {
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
};

export const addTask = (newTask) => {
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
};

export const deleteTask = (taskId) => {
  return fetch(apiUrl + "/" + taskId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
};

export const updateTask = (taskId, updatedTask) => {
  return fetch(apiUrl + "/" + taskId, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTask),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
};
