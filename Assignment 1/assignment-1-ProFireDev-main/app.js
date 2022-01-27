//All your code goes in this file
const express = require("express");
<<<<<<< Updated upstream
const Datastore = require("nedb");
//const bootstrap = require("bootstrap"); // not needed right now. pulls from web
const app = express();

//Do not remove this line. This allows the test suite to start
//multiple instances of your server on different ports
module.exports = app;

const database = new Datastore("database.db");
database.loadDatabase();

app.get("/api", (request, res) => {
  database.find({}, (err, data) => {
    if (err) {
      res.end();
      return;
    }
    res.json(data);
  });
});

database.loadDatabase(function (err) {
  // Start issuing commands after callback...
});

// testing error handeling and returning some of the ress
app.use(function (req, res, next) {
  res.status(404);

  // respond with html page
  if (req.accepts("html")) {
    res.render("404", { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts("json")) {
    res.send({ error: "Not found" });
    return;
  }

  // default to plain-text. send()
  res.type("txt").send("Not found");
});

//////////////////////////new stuff from testing\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////\/\/\/\/\/\/\/\\/\/\/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

database.loadDatabase();

app.get("/api", (request, res) => {
  database.find({}, (err, data) => {
    if (err) {
      res.end();
      return;
    }
    res.json(data);
  });
});

//make a new entry to the database
app.post("/api", (request, res) => {
  const data = request.body;
  database.insert(data, (err, newDoc) => {
    if (err) {
      res.end();
      return;
    }
    res.json(newDoc);
  });
});

//make a put request to update an entry in the database
app.put("/api/:id", (request, res) => {
  const id = request.params.id;
  const data = request.body;
  database.update({ _id: id }, data, {}, (err, numReplaced) => {
    if (err) {
      res.end();
      return;
    }
    res.json(numReplaced);
  });
});

//make a delete request to delete an entry in the database
app.delete("/api/:id", (request, res) => {
  const id = request.params.id;
  database.remove({ _id: id }, {}, (err, numRemoved) => {
    if (err) {
      res.end();
      return;
    }
    res.json(numRemoved);
  });
});

// search the database for a specific entry
app.get("/api/:id", (request, res) => {
  const id = request.params.id;
  database.findOne({ _id: id }, (err, data) => {
    if (err) {
      res.end();
      return;
    }
    res.json(data);
  });
});

database.find({}, (err, data) => {
  if (err) {
    res.end();
    return;
  }
  res.json(data);
});

req.body;
//resopond to the request with a 200 status code
=======
const Datastore = require("nedb")

const app = express();
app.use(express.json());
app.use(express.static('public'))
const db = new Datastore("./database.db")
db.loadDatabase()

// get api 

app.get('/api', (req, resp) => {
    let data = db.find({}, (err, doc) => {
        if(err) {
            console.log("ERROR")
        } else {
            console.log(doc)
            resp.json(doc);
        }
    })
})

//get request / seatch

app.get('/api/search', (req, resp) => {
    db.find(req.query, (err, doc) => {
        if(err || doc.length == 0) {
            resp.status(400).json({ error: 'haha didnt work'});
        } else {
            console.log(doc)
            resp.json(doc);
        }
    })
})

//post request 

app.post('/api', function (req, res) {  
    let keys = Object.keys(req.body)

    if(keys.includes("name")){
        db.insert(req.body, (err, newDoc) => {
            res.status(201).json(newDoc);
        })
    } else {
        res.status(400).json({ error: 'Post error /api - Bad Request'});
    }
})

//put request

app.put('/api/:id', (req, res) => {
    let id = req.params.id;
    let data = req.body;
    let keys = Object.keys(req.body)
    if(keys.includes("name")){
        data._id = id;
    db.update({_id: id}, data, {upsert:true, returnUpdatedDocs:true}, (err, num, doc, upsert) => {
        if(upsert) {
            res.status(201)
        } else {
            res.status(200)
        }
        res.json(doc)
        })} else {
            res.status(400).json({ error: 'error in app.put /api/id (bad request)'})
        }
})

//delete request 

app.delete('/api/:id', (req, resp) => {
    let id = req.params.id;
        db.remove({_id: id}, {}, (err, num) => {
            if(num) {
                resp.status(204);
                resp.end();
            } else {
                resp.status(404).json({ error: 'error with delete request (ID not found)'});
            }
        })
})
    //res.json(response);
    //res.end();

    //rewrite pulling from api here
const fetch = require("cross-fetch");

async function loadData() {
  let url = "https://api.opencovid.ca/"; // maybe fix this later
  let obj = await (await fetch(url)).json();
  console.log(obj);
}
>>>>>>> Stashed changes

res.status(200);

<<<<<<< Updated upstream
//this is much easier to do now with this boiler plate code
=======
//Do not remove this line. This allows the test suite to start
//multiple instances of your server on different ports
module.exports = app;
>>>>>>> Stashed changes
