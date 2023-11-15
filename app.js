//todo-list-node.js/app.js

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

app.use(express.json());

// Import the router from routes
const indexRouter = require('./routes/index');

// Configure the routes
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}/`);
});
