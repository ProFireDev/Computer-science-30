const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api", (req, res) => {
    res.send("Hello World");
    }