// todo-list-node.js/controllers/taskController

//Task list
let tasks = [
    { id: 1, text: 'Tarea 1' },
    { id: 2, text: 'Tarea 2' },
  ];

  // Functions  for routes
  
  // Function for route /task (GET)
  const getTasks = (req, res) => {
    res.json(tasks);
  };
  
  // Function for route /tasks (POST)
  const addTask = (req, res) => {
    const newTask = req.body
    // {
    //   id: tasks.length + 1,
    //   text: req.body.text,
    // };
    tasks.push(newTask);
    res.json(newTask);
  };
  
  // Exporta las funciones del controlador
  module.exports = {
    getTasks,
    addTask,
    // Agrega otras funciones según sea necesario
  };
  