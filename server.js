const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require("express");
const path = require('path')
const cors = require('cors')
const app = express();
const port = 4741;

app.use(cors())

app.get("/", async (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '/index.html'))
});

app.get("/blog", async (req, res) => {
  const fetchRes = await fetch("https://employthevets.com/api/get-blog");
  const data = await fetchRes.json();
//   console.log(data);
  res.status(200).json(data);
});
app.get("/projects", async (req, res) => {
  const fetchRes = await fetch("https://kevinjmosley.com/api/get-projects");
  const data = await fetchRes.json();
//   console.log(data);
  res.status(200).json(data);
});
app.get("/skills", async (req, res) => {
  const fetchRes = await fetch("https://kevinjmosley.com/api/get-skilss");
  const data = await fetchRes.json();
//   console.log(data);
  res.status(200).json(data);
});
app.get("/todos", async (req, res) => {
  const fetchRes = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
  const data = await fetchRes.json();
//   console.log(data);
  res.status(200).json(data);
});

app.get("/todos/:id", async (req, res) => {
  const fetchRes = await fetch(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`);
  const data = await fetchRes.json();
//   console.log(data);
  res.status(200).json(data);
});

app.get("/users", async (req, res) => {
  const fetchRes = await fetch("https://jsonplaceholder.typicode.com/users?_limit=5");
  const data = await fetchRes.json();
//   console.log(data);
  res.status(200).json(data);
});

app.get("/users/:id", async (req, res) => {
  const fetchRes = await fetch(`https://jsonplaceholder.typicode.com/users/${req.params.id}`);
  const data = await fetchRes.json();
//   console.log(data);
  res.status(200).json(data);
});
app.get("/users/:id/todos", async (req, res) => {
  const fetchRes = await fetch(`https://jsonplaceholder.typicode.com/users/${req.params.id}/todos?_limit=5`);
  const data = await fetchRes.json();
//   console.log(data);
  res.status(200).json(data);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
