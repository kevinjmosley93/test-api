const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require("express");
const path = require('path')
const app = express();
const port = 4741;

app.get("/", async (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '/index.html'))
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
  const fetchRes = await fetch(`https://jsonplaceholder.typicode.com/users/${req.params.id}/posts`);
  const data = await fetchRes.json();
//   console.log(data);
  res.status(200).json(data);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
