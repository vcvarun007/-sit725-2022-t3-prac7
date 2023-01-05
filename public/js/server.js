const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
let projectCollection;
let dbConnect = require("./dbConnect");
let projectRoutes = require("../../routes/projectRoutes");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/projects", projectRoutes);

//mongoDB connection

// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   "mongodb+srv://vcvarun007:vcvarun007@cluster0.zfxgxdf.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });

//create collection
// const createColllection = (collectionName) => {
//   client.connect((err, db) => {
//     projectCollection = client.db().collection(collectionName);
//     if (!err) {
//       console.log("MongoDB Connected");
//     } else {
//       console.log("DB Error: ", err);
//       process.exit(1);
//     }
//   });
// };

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  // createColllection("RandomTestCollection");
});
