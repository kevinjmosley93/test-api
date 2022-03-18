const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require("express");
const path = require('path')
const app = express();
const port = 4741;

app.get("/", async (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '/index.html'))
});

app.get("/posts", async (req, res) => {
  const fetchRes = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await fetchRes.json();
//   console.log(data);
  res.status(200).json(data);
});

app.get("/posts/:id", async (req, res) => {
  const fetchRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
  const data = await fetchRes.json();
//   console.log(data);
  res.status(200).json(data);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
