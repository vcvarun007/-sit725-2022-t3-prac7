const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
let projectCollection;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//mongoDB connection
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://vcvarun007:vcvarun007@cluster0.zfxgxdf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

//create collection
const createColllection = (collectionName) => {
  client.connect((err, db) => {
    projectCollection = client.db().collection(collectionName);
    if (!err) {
      console.log("MongoDB Connected");
    } else {
      console.log("DB Error: ", err);
      process.exit(1);
    }
  });
};

//insert project
const insertProjects = (project, callback) => {
  projectCollection.insert(project, callback);
};

//post method
app.post("/api/projects", (req, res) => {
  console.log("New Project added", req.body);
  var newProject = req.body;
  insertProjects(newProject, (err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({
        statusCode: 200,
        message: "Project Successfully added",
        data: result,
      });
    }
  });
});

// const cardList = [
//   {
//     title: "Car",
//     image: "images/car.jpg",
//     link: "About Caaaar",
//     desciption: "Demo desciption about Car",
//   },
//   {
//     title: "Bug",
//     image: "images/bug.jpg",
//     link: "About Bug",
//     desciption: "Demo desciption about bug",
//   },
// ];

// app.get("/", (req, res) => {
//   res.render("index.html");
// });

// app.get("/api/projects", (req, res) => {
//   res.json({ statusCode: 200, data: cardList, message: "Success" });
// });

// get project...
const getProjects = (callback) => {
  projectCollection.find({}).toArray(callback);
};

app.get("/api/projects", (req, res) => {
  getProjects((err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({ statusCode: 200, message: "Success", data: result });
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  createColllection("RandomTestCollection");
});
