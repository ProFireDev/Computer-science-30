const express = require("express");
const Datastore = require("nedb");
const app = express();
app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

const database = new Datastore("database.db");

app.get("/api", (request, response) => {
  database.find({}, (err, data) => {
    response.json(data);
    if (err) {
      response.end();
      console.log("an error happened requestiong the data");
      return;
    }
  });
});

app.post("/api", (request, response) => {
  console.log("Request Received");
  console.log(request.body);
  const data = request.body;
  const timestamp = date.now();
  data.timestamp = timestamp;
  database.insert(data);

  response.json({
    status: "success",
    timestamp: timestamp,
    longitude: data.lat,
    latitude: data.lon,
  });
});
