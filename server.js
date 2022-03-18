const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require("express");
const app = express();
const port = 4741 || 'https://api.kevinjmosley.com';

app.get("/posts", async (req, res) => {
  const fetchRes = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await fetchRes.json();
  console.log(data);
  res.status(200).json(data);
});

app.get("/posts/:id", async (req, res) => {
  const fetchRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
  const data = await fetchRes.json();
  console.log(data);
  res.status(200).json(data);
});









app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
