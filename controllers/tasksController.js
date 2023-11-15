// todo-list-node.js/controllers/taskController

//Task list
let tasks = [
  { id: 1, text: "Tarea 1" },
  { id: 2, text: "Tarea 2" },
];

// Functions  for routes

// Function for route /tasks (GET)
const getTasks = (req, res) => {
  res.json(tasks);
};

// Function for route /tasks (POST)
const addTask = (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.json(newTask);
};

const deleteTask = (req, res) => {
  const taskIdToDelete = parseInt(req.params.id);
  const filtered = tasks.filter((task) => task.id !== taskIdToDelete);
};

// Exporta las funciones del controlador
module.exports = {
  getTasks,
  addTask,
  deleteTask,
  // Agrega otras funciones según sea necesario
};
