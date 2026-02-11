const express = require("express");
const server = express();
const mongoose = require("mongoose");
const Task = require("./models/task");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5700;
const { DB_URI, CORS_ORIGIN } = process.env;

server.use(cors({ origin: CORS_ORIGIN || "*" })); // Allow CORS from specified origin or all origins if CORS_ORIGIN is not set
server.use(express.json());

server.get("/", (req, res) => {
  res.send(
    'Welcome to the Task Manager API click here to check <a href="/tasks">tasks</a>',
  );
});

server.get("/health", (req, res) => {
  res.status(200).send({ status: "ok" });
});

mongoose
  .connect(DB_URI)
  .then(() => {
    server.listen(port, () => {
      console.log(`Connected to DB\nServer listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

server.get("/tasks", async (req, res) => {
  await Task.find().then((tasks) => res.send(tasks));
});

server.post("/tasks", async (req, res) => {
  const { title, description, completed } = req.body;
  const task = new Task({ title, description, completed });
  await task.save().then((task) => res.send({ message: "Task created", task }));
});

server.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  await Task.findByIdAndUpdate(id, { title, description, completed }).then(
    () => {
      res.send({ message: "Task updated" });
    },
  );
});

server.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id).then(() => {
    res.send({ message: "Task deleted" });
  });
});
