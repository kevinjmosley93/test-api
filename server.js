const { faqs } = require("./data");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 4741;

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json

app.get("/", async (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "/index.html"));
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
  const fetchRes = await fetch("https://kevinjmosley.com/api/get-skills");
  const data = await fetchRes.json();
  //   console.log(data);
  res.status(200).json(data);
});

app.get("/todos", async (req, res) => {
  const fetchRes = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const data = await fetchRes.json();
  //   console.log(data);
  res.status(200).json(data);
});

app.get("/todos/:id", async (req, res) => {
  const fetchRes = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${req.params.id}`
  );
  const data = await fetchRes.json();
  //   console.log(data);
  res.status(200).json(data);
});

app.get("/users", async (req, res) => {
  const fetchRes = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=5"
  );
  const data = await fetchRes.json();
  //   console.log(data);
  res.status(200).json(data);
});

app.get("/users/:id", async (req, res) => {
  const fetchRes = await fetch(
    `https://jsonplaceholder.typicode.com/users/${req.params.id}`
  );
  const data = await fetchRes.json();
  //   console.log(data);
  res.status(200).json(data);
});

app.get("/users/:id/todos", async (req, res) => {
  const fetchRes = await fetch(
    `https://jsonplaceholder.typicode.com/users/${req.params.id}/todos?_limit=5`
  );
  const data = await fetchRes.json();
  //   console.log(data);
  res.status(200).json(data);
});

//  FAQS
app.get("/faqs", async (req, res) => {
  // console.log(faqs);
  res.status(200).json(faqs);
});

app.get("/faqs/:id", async (req, res) => {
  const foundFaq = faqs.find((faq) => {
    // console.log("test", faq.id, parseInt(req.params.id));
    if (faq.id === parseInt(req.params.id)) return faq;
  });

  // console.log("foundfaq is ========>", foundFaq);

  const msg = { msg: `no faqs found with id ${req.params.id}` };

  if (parseInt(req.params.id) >= faqs.length) return res.status(404).json(msg);

  return res.status(200).json(foundFaq);
});

app.post("/agency", async (req, res) => {
  const { name, email, phone, subject, message } = await req.body;

  const data = {
    name,
    email,
    phone,
    subject,
    message,
  };
  console.log("data:", data);
  res.status(200).json(data);
});

app.post("/services", async (req, res) => {
  const { email } = await req.body;

  const data = {
    email,
  };

  console.log("data:", data);
  res.status(200).json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port =====> ${port}`);
});
