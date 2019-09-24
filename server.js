// empty JS object to act as endpoint for all routes (for data management)
const projectData = {};

// require Express to run server and routes and other dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// start up an instance of app
const app = express();

// configure express and body-parser to use as middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configure Cors for cross origin allowance
app.use(cors());

// initialize the main project folder
app.use(express.static('website'));

// setup server
const port = 3000;
app.listen(port, () => { // const server =
  console.log(`Listening on port ${port}`);
});

// GET routes and callback functions
// get a specific entry
app.get('/entry/:id', (req, res) => {
  res.send(projectData[req.params.id]);
});

// get all entries
app.get('/all', (req, res) => {
  res.send(projectData);
});

// POST routes and callback functions
app.post('/add', (req, res) => {
  // add data to object
  const { body } = req;
  projectData[body.id] = body;
  // return most recent entry
  res.send(projectData[body.id]);
});
