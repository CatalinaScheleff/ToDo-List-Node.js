// todo-list-node.js/client/src/api.js

export const getTasks = () => {
  return fetch("http://localhost:3001/tasks", {
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
  return fetch("http://localhost:3001/tasks", {
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
