// todo-list-node.js/routes/index.js

const express = require("express");
const router = express.Router();

// Import the tasks controller
const tasksController = require("../controllers/tasksController");

// Define the routes
router.get("/tasks", tasksController.getTasks);

router.post("/tasks", tasksController.addTask);

router.delete("/tasks/:id", tasksController.deleteTask);

router.put("/tasks/:id", tasksController.updateTask);

// Export the router to be used in app.js
module.exports = router;
