// todo-list-node.js/controllers/taskController.js

let tasks = [
  { id: 1, text: "Task 1" },
  { id: 2, text: "Task 2" },
];

const getTasks = (req, res) => {
  res.json(tasks);
};

const addTask = (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.json(newTask);
};

const deleteTask = (req, res) => {
  const taskToDeleteId = parseInt(req.params.id);
  const filtered = tasks.filter((task) => task.id !== taskToDeleteId);
  tasks = filtered;
  res.json({ success: true });
};

const updateTask = (req, res) => {
  const taskToUpdateId = parseInt(req.params.id);
  const updatedText = req.body.text;

  tasks = tasks.map((task) =>
    task.id === taskToUpdateId ? { ...task, text: updatedText } : task
  );

  res.json({ success: true });
};

module.exports = {
  getTasks,
  addTask,
  deleteTask,
  updateTask,
};
