const Datastore = require("nedb");

const database = new Datastore("database.db");
database.loadDatabase();

app.get("/api", (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

//make a new entry to the database
app.post("/api", (request, response) => {
  const data = request.body;
  database.insert(data, (err, newDoc) => {
    if (err) {
      response.end();
      return;
    }
    response.json(newDoc);
  });
});

//make a put request to update an entry in the database
app.put("/api/:id", (request, response) => {
  const id = request.params.id;
  const data = request.body;
  database.update({ _id: id }, data, {}, (err, numReplaced) => {
    if (err) {
      response.end();
      return;
    }
    response.json(numReplaced);
  });
});

//make a delete request to delete an entry in the database
app.delete("/api/:id", (request, response) => {
  const id = request.params.id;
  database.remove({ _id: id }, {}, (err, numRemoved) => {
    if (err) {
      response.end();
      return;
    }
    response.json(numRemoved);
  });
});

// search the database for a specific entry
app.get("/api/:id", (request, response) => {
  const id = request.params.id;
  database.findOne({ _id: id }, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

database.find({}, (err, data) => {
  if (err) {
    response.end();
    return;
  }
  response.json(data);
});

//resopond to the request with a 200 status code
response.status(200);

//this is much easier to do now with this boiler plate code
